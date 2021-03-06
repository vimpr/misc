
(function () {
  let result = [];
  for (let [n, v] in Iterator(modules)) {
    try {
      if (modules[n] instanceof Module.constructors[n]) {
        result.push(n);
        [result.push('  ' + m) for (m in allkeys(modules[n].__proto__)) if (/^[^_]/(m))];
      }
    } catch (e) {}
  }
  util.copyToClipboard(result.join('\n'));
  liberator.echo(result.length);

})();


<>
config
  init
  name
  hostApplication
  features
  defaults
  guioptions
  visualbellWindow
  styleableChrome
  autocommands
  dialogs
  hasTabbrowser
  ignoreKeys
  scripts
  tempFile
  constructor
  browser
  tabbrowser
  browserModes
  mainWindowId
  modes
  outputHeight
  requires
  toString
  setTimeout
util
  init
  cloneObject
  clip
  compareIgnoreCase
  computedStyle
  copyToClipboard
  createURI
  losslessDecodeURI
  escapeHTML
  escapeRegex
  escapeString
  extend
  makeXPath
  memoize
  splitLiteral
  formatBytes
  exportHelp
  httpGet
  evaluateXPath
  identity
  intersection
  map
  Math
  newURI
  objectToString
  range
  interruptibleRange
  readFromClipboard
  stringToURLArray
  xmlToDom
  constructor
  requires
  toString
  setTimeout
modes
  requires
  init
  NONE
  all
  mainModes
  mainMode
  addMode
  getMode
  getCharModes
  matchModes
  show
  add
  set
  push
  pop
  setCustomMode
  reset
  remove
  passNextKey
  passAllKeys
  isRecording
  isReplaying
  main
  extended
  constructor
  toString
  setTimeout
abbreviations
  requires
  init
  add
  get
  merged
  list
  remove
  removeAll
  constructor
  toString
  setTimeout
autocommands
  requires
  init
  add
  get
  remove
  list
  trigger
  constructor
  toString
  setTimeout
buffer
  requires
  init
  destroy
  onDOMContentLoaded
  onPageLoad
  progressListener
  alternateStyleSheets
  getAllFrames
  pageInfo
  loaded
  localStore
  lastInputField
  URL
  URI
  pageHeight
  textZoom
  fullZoom
  title
  scrollXPercent
  scrollYPercent
  addPageInfoSection
  getCurrentWord
  focusElement
  followDocumentRelationship
  followLink
  selectionController
  openContextMenu
  saveLink
  scrollBottom
  scrollColumns
  scrollEnd
  scrollLines
  scrollPages
  scrollByScrollSize
  scrollToPercent
  scrollTo
  scrollStart
  scrollTop
  shiftFrameFocus
  showElementInfo
  showPageInfo
  viewSelectionSource
  viewSource
  zoomIn
  zoomOut
  constructor
  toString
  setTimeout
services
  init
  add
  addClass
  get
  create
  constructor
  requires
  toString
  setTimeout
liberator
  requires
  init
  destroy
  mode
  menuItems
  focus
  extensions
  getExtension
  CURRENT_TAB
  NEW_TAB
  NEW_BACKGROUND_TAB
  NEW_WINDOW
  forceNewTab
  forceNewWindow
  version
  commandLineOptions
  registerObserver
  unregisterObserver
  triggerObserver
  beep
  newThread
  callAsync
  callFunctionInThread
  dump
  dumpStack
  echo
  echoerr
  echomsg
  loadScript
  eval
  evalExpression
  execute
  focusContent
  has
  hasExtension
  findHelp
  initHelp
  help
  globalVariables
  loadPlugins
  log
  open
  pluginFiles
  plugins
  quit
  assert
  trapErrors
  reportError
  restart
  parseCommandLine
  sleep
  callInMainThread
  threadYield
  variableReference
  windows
  constructor
  toString
  setTimeout
template
  add
  join
  map
  maybeXML
  completionRow
  bookmarkDescription
  icon
  filter
  highlight
  highlightFilter
  highlightRegexp
  highlightSubstrings
  highlightURL
  genericOutput
  genericTable
  options
  table
  tabular
  constructor
  requires
  toString
  init
  setTimeout
commandline
  requires
  init
  HL_NORMAL
  HL_ERRORMSG
  HL_MODEMSG
  HL_MOREMSG
  HL_QUESTION
  HL_INFOMSG
  HL_WARNINGMSG
  HL_LINENR
  FORCE_MULTILINE
  FORCE_SINGLELINE
  DISALLOW_MULTILINE
  APPEND_TO_MESSAGES
  completionContext
  mode
  silent
  quiet
  registerCallback
  triggerCallback
  runSilently
  command
  message
  open
  close
  hide
  show
  echo
  input
  inputMultiline
  onEvent
  onMultilineInputEvent
  onMultilineOutputEvent
  getSpaceNeeded
  updateMorePrompt
  updateOutputHeight
  resetCompletions
  constructor
  toString
  setTimeout
commands
  init
  OPTION_ANY
  OPTION_NOARG
  OPTION_BOOL
  OPTION_STRING
  OPTION_INT
  OPTION_FLOAT
  OPTION_LIST
  COUNT_NONE
  COUNT_ALL
  repeat
  add
  addUserCommand
  commandToString
  get
  getUserCommand
  getUserCommands
  parseArgs
  parseCommand
  complQuote
  quoteArg
  removeUserCommand
  replaceTokens
  constructor
  requires
  toString
  setTimeout
completion
  init
  setFunctionCompleter
  runCompleter
  listCompleter
  url
  urlCompleters
  addUrlCompleter
  urls
  constructor
  requires
  toString
  setTimeout
editor
  requires
  init
  line
  col
  unselectText
  selectedText
  pasteClipboard
  executeCommand
  executeCommandWithMotion
  moveToPosition
  findCharForward
  findCharBackward
  editFileExternally
  editFieldExternally
  expandAbbreviation
  constructor
  toString
  setTimeout
events
  requires
  init
  destroy
  addSessionListener
  feedingKeys
  startRecording
  playMacro
  getMacros
  deleteMacros
  feedkeys
  create
  canonicalKeys
  fromString
  toString
  isAcceptKey
  isCancelKey
  waitForPageLoad
  onFocusChange
  onSelectionChange
  onEscape
  onKeyPress
  onKeyUpOrDown
  onPopupShown
  onPopupHidden
  onDOMMenuBarActive
  onDOMMenuBarInactive
  onResize
  constructor
  setTimeout
finder
  requires
  init
  openPrompt
  find
  findAgain
  onKeyPress
  onSubmit
  onCancel
  highlight
  clear
  constructor
  toString
  setTimeout
rangefinder
  requires
  init
  openPrompt
  bootstrap
  find
  findAgain
  onKeyPress
  onSubmit
  onCancel
  rangeFind
  highlight
  clear
  constructor
  toString
  setTimeout
hints
  requires
  init
  addMode
  show
  hide
  onEvent
  constructor
  toString
  setTimeout
io
  requires
  init
  destroy
  File
  sourcing
  expandPath
  getCurrentDirectory
  setCurrentDirectory
  getRuntimeDirectories
  getRCFile
  createTempFile
  blockingProcesses
  run
  sourceFromRuntimePath
  source
  system
  withTempFiles
  constructor
  toString
  setTimeout
javascript
  init
  completers
  getKey
  iter
  objectKeys
  eval
  cache
  complete
  constructor
  requires
  toString
  setTimeout
mappings
  requires
  init
  getUserIterator
  addMode
  add
  addUserMap
  get
  getDefault
  getCandidates
  getMapLeader
  hasMap
  remove
  removeAll
  list
  constructor
  toString
  setTimeout
marks
  requires
  init
  all
  add
  remove
  jumpTo
  list
  constructor
  toString
  setTimeout
options
  requires
  init
  destroy
  prefObserver
  add
  allPrefs
  get
  list
  listPrefs
  parseOpt
  remove
  store
  getPref
  safeSetPref
  setPref
  resetPref
  invertPref
  pushContext
  popContext
  withContext
  constructor
  toString
  setTimeout
statusline
  init
  update
  updateUrl
  updateInputBuffer
  updateTabCount
  updateBufferPosition
  updateField
  constructor
  requires
  toString
  setTimeout
browser
  constructor
  requires
  toString
  init
  setTimeout
bookmarks
  requires
  init
  format
  get
  add
  toggle
  isBookmarked
  remove
  getSearchEngines
  getSuggestions
  getKeywords
  getSearchURL
  list
  constructor
  toString
  setTimeout
history
  requires
  format
  service
  get
  session
  stepTo
  goToStart
  goToEnd
  list
  constructor
  toString
  init
  setTimeout
quickmarks
  requires
  init
  add
  remove
  removeAll
  jumpTo
  list
  constructor
  toString
  setTimeout
sanitizer
  requires
  init
  sanitize
  prefNames
  constructor
  clearItem
  canClearItem
  prefDomain
  getNameFromPreference
  ignoreTimespan
  range
  items
tabs
  requires
  init
  alternate
  browsers
  count
  options
  getLocalStore
  localStore
  closedTabs
  index
  get
  getContentIndex
  getTab
  list
  move
  remove
  keepOnly
  select
  reload
  reloadAll
  stop
  stopAll
  switchTo
  cloneTab
  detachTab
  selectAlternateTab
  updateSelectionHistory
  constructor
  toString
  setTimeout

</>;
