Ext.data.JsonP.Counter({"tagname":"class","name":"Counter","autodetected":{},"files":[{"filename":"flow.js","href":"flow.html#Counter"}],"members":[{"name":"inc","tagname":"method","owner":"Counter","id":"method-inc","meta":{}},{"name":"next","tagname":"method","owner":"Counter","id":"method-next","meta":{}},{"name":"set","tagname":"method","owner":"Counter","id":"method-set","meta":{}},{"name":"setFlow","tagname":"method","owner":"Counter","id":"method-setFlow","meta":{}},{"name":"tick","tagname":"method","owner":"Counter","id":"method-tick","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Counter","short_doc":"A counter, that callbacks have access to. ...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/flow.html#Counter' target='_blank'>flow.js</a></div></pre><div class='doc-contents'><p>A counter, that callbacks have access to.\nThis has been moved from Manager, so that decrement operation on a stale counter doesn't affect the\nflow of control unknowingly. i.e just for robustness.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-inc' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Counter'>Counter</span><br/><a href='source/flow.html#Counter-method-inc' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Counter-method-inc' class='name expandable'>inc</a>( <span class='pre'>[val]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Increment counter. ...</div><div class='long'><p>Increment counter.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>val</span> : Number (optional)<div class='sub-desc'>\n<p>Defaults to: <code>1</code></p></div></li></ul></div></div></div><div id='method-next' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Counter'>Counter</span><br/><a href='source/flow.html#Counter-method-next' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Counter-method-next' class='name expandable'>next</a>( <span class='pre'>error, result</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Execute the next task. ...</div><div class='long'><p>Execute the next task.\nNote: The next task won't be called if counter is greater than zero.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>error</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>result</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-set' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Counter'>Counter</span><br/><a href='source/flow.html#Counter-method-set' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Counter-method-set' class='name expandable'>set</a>( <span class='pre'>val, [repeat], [tolerance]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Set counter value. ...</div><div class='long'><p>Set counter value. Also set the flow and behavior of task execution.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>val</span> : Number<div class='sub-desc'><p>Value of the counter to be set.</p>\n</div></li><li><span class='pre'>repeat</span> : Boolean (optional)<div class='sub-desc'><p>Check setFlow() method for documentation.</p>\n<p>Defaults to: <code>false</code></p></div></li><li><span class='pre'>tolerance</span> : Boolean (optional)<div class='sub-desc'><p>Check setFlow() method for documentation.</p>\n</div></li></ul></div></div></div><div id='method-setFlow' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Counter'>Counter</span><br/><a href='source/flow.html#Counter-method-setFlow' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Counter-method-setFlow' class='name expandable'>setFlow</a>( <span class='pre'>[config]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Decide the flow and behavior of task execution. ...</div><div class='long'><p>Decide the flow and behavior of task execution.\nTell what to do when counter hits zero or when faced with an error.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object (optional)<div class='sub-desc'>\n<ul><li><span class='pre'>repeat</span> : Boolean (optional)<div class='sub-desc'><p>If true, repeats the current task exactly once, when counter hits zero.</p>\n<p>Defaults to: <code>false</code></p></div></li><li><span class='pre'>tolerance</span> : Boolean (optional)<div class='sub-desc'><p>Error tolerance level.\nIf an error is encountered when tolerance = 0, then a call to tick(err, null) will immediately cause the next task to be executed\nand the error will be passed to that task.\nIf tolerance = 1, then tick(err, null) will store the error(s) and pass them to the next task only when counter hits zero.</p>\n<p>Defaults to: <code>manager.tolerance</code></p></div></li></ul></div></li></ul></div></div></div><div id='method-tick' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Counter'>Counter</span><br/><a href='source/flow.html#Counter-method-tick' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Counter-method-tick' class='name expandable'>tick</a>( <span class='pre'>error, result</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Decrements counter by 1. ...</div><div class='long'><p>Decrements counter by 1. Send the error or result.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>error</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>result</span> : Object<div class='sub-desc'></div></li></ul></div></div></div></div></div></div></div>","meta":{}});