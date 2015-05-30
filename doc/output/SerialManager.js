Ext.data.JsonP.SerialManager({"tagname":"class","name":"SerialManager","autodetected":{},"files":[{"filename":"flow.js","href":"flow.html#SerialManager"}],"private":true,"members":[{"name":"tolerance","tagname":"property","owner":"SerialManager","id":"property-tolerance","meta":{}},{"name":"execute","tagname":"method","owner":"SerialManager","id":"method-execute","meta":{}},{"name":"next","tagname":"method","owner":"SerialManager","id":"method-next","meta":{}},{"name":"set","tagname":"method","owner":"SerialManager","id":"method-set","meta":{}},{"name":"store","tagname":"method","owner":"SerialManager","id":"method-store","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-SerialManager","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/flow.html#SerialManager' target='_blank'>flow.js</a></div></pre><div class='doc-contents'><div class='rounded-box private-box'><p><strong>NOTE:</strong> This is a private utility class for internal use by the framework. Don't rely on its existence.</p></div><p>Manages serial async tasks.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-tolerance' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SerialManager'>SerialManager</span><br/><a href='source/flow.html#SerialManager-property-tolerance' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SerialManager-property-tolerance' class='name expandable'>tolerance</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Error tolerance level. ...</div><div class='long'><p>Error tolerance level.</p>\n<p>Defaults to: <code>0</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-execute' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SerialManager'>SerialManager</span><br/><a href='source/flow.html#SerialManager-method-execute' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SerialManager-method-execute' class='name expandable'>execute</a>( <span class='pre'>err, result, baggage, cb</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Start executing task. ...</div><div class='long'><p>Start executing task. Similar signature as next(), but additionally takes\na 4th parameter as callback, that will be called once all the tasks complete.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>err</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>result</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>baggage</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>cb</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-next' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SerialManager'>SerialManager</span><br/><a href='source/flow.html#SerialManager-method-next' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SerialManager-method-next' class='name expandable'>next</a>( <span class='pre'>error, result, baggage</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Execute the next task. ...</div><div class='long'><p>Execute the next task.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>error</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>result</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>baggage</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-set' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SerialManager'>SerialManager</span><br/><a href='source/flow.html#SerialManager-method-set' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SerialManager-method-set' class='name expandable'>set</a>( <span class='pre'>config</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Decide the flow and behavior of task execution. ...</div><div class='long'><p>Decide the flow and behavior of task execution.\nTell what to do when counter hits zero or an error condition.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'>\n<ul><li><span class='pre'>repeat</span> : Boolean (optional)<div class='sub-desc'><p>If true, repeats the current task once, when counter hits zero.</p>\n<p>Defaults to: <code>false</code></p></div></li><li><span class='pre'>tolerance</span> : Boolean (optional)<div class='sub-desc'>\n<p>Defaults to: <code>0</code></p></div></li></ul></div></li></ul></div></div></div><div id='method-store' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SerialManager'>SerialManager</span><br/><a href='source/flow.html#SerialManager-method-store' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SerialManager-method-store' class='name expandable'>store</a>( <span class='pre'>error, result, index</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Stores error and result, that are meant to be sent as arguments to the next callback in the list. ...</div><div class='long'><p>Stores error and result, that are meant to be sent as arguments to the next callback in the list.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>error</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>result</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>index</span> : Object<div class='sub-desc'></div></li></ul></div></div></div></div></div></div></div>","meta":{"private":true}});