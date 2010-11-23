
require 'rexml/document'

PluginInfo = Struct.new(:name, :author, :description)

class InfoExtracter
  def self.extract_with (lines, name)
    result = ''
    in_xml = false
    lines.each do
      |line|

      if in_xml
        if />;\Z/ === line
          result << line.sub(/;\Z/, '')
          result.strip!
          if /\A<>/ === result and /<\/>\Z/ === result
            return result.sub(/\A<>/, '<hoge>').sub(/<\/>\Z/, '</hoge>')
          else
            return result
          end
        end
        result << line
      else
        if /\A\s*(var|let|const|)\s*?#{name}\s*=\s*/ === line
          result << line.sub(/\A[^=]*=/, '')
          in_xml = true
        end
      end
    end

    return nil
  end

  def self.extract (lines)
    [self.extract_with(lines, 'INFO'), nil && self.extract_with(lines, 'PLUGIN_INFO')].map do
      |source|
      #p source
      next unless source
      REXML::Document.new(source)
    end
  end
end


class REXML::Document
  def get_attribute_value (path, attr_name)
    REXML::XPath.first(self, "#{path}/attribute::#{attr_name}").value
  end

  def get_text (path)
    REXML::XPath.first(self, "#{path}").text rescue nil
  end

  def get_text_lang (path, lang)
    node = REXML::XPath.first(self, "#{path}[@lang=\"#{lang}\"]") || REXML::XPath.first(self, "#{path}")
    node.text rescue nil
  end
end


class PluginInfo
  def self.load (file, lang)
    official = self.load_from_official(file, lang) rescue nil
    return official if official
    return self.load_from_teramako(file, lang)
  end

  def self.fix_name (file, name)
    return name unless /\A\{NAME\}\Z/ === name
    File.basename(file).sub(/\.js\Z/, '')
  end

  def self.load_from_official (file, lang)
    source = self.extract_from_file(file, 'INFO')
    return unless source
    doc = REXML::Document.new(source)
    root = REXML::XPath.first(doc, "//plugin[@lang=\"#{lang}\"]") || REXML::XPath.first(doc, "//plugin")
    return unless root
    PluginInfo.new(
      root.attributes['name'],
      root.get_text('//author'),
      root.attributes['summary']
    )
  end

  def self.load_from_teramako (file, lang)
    source = self.extract_from_file(file, 'PLUGIN_INFO')
    return unless source
    begin
      doc = REXML::Document.new(source)
      PluginInfo.new(
        self.fix_name(file, doc.get_text_lang('//name', lang)),
        doc.get_text_lang('//author', lang),
        doc.get_text_lang('//description', lang)
      )
    rescue
      puts file
    end
  end

  def self.extract_from_file (file, name)
    result = ''
    in_xml = false
    file.untaint
    File.readlines(file).each do
      |line|
      if in_xml
        if />;\s*\Z/ === line
          result << line.sub(/;\Z/, '')
          result.strip!
          if /\A<>/ === result and /<\/>\Z/ === result
            return result.sub(/\A<>/, '<hoge>').sub(/<\/>\Z/, '</hoge>')
          else
            return result
          end
        end
        result << line
      else
        if /\A\s*(var|let|const|)\s*?#{name}\s*=\s*/ === line
          result << line.sub(/\A[^=]*=/, '')
          in_xml = true
        end
      end
    end

    return nil
  end
end
