Ext.data.JsonP.flow({"tagname":"class","name":"flow","autodetected":{},"files":[{"filename":"flow.js","href":"flow.html#flow"}],"singleton":true,"params":[{"tagname":"params","type":"Object","name":"config","optional":true,"doc":"\n","html_type":"Object"},{"tagname":"params","type":"Function","name":"functions","doc":"<p>func1, func2, ... funcN</p>\n","html_type":"Function"},{"tagname":"params","type":"Object","name":"scope","optional":true,"doc":"\n","html_type":"Object"}],"members":[{"name":"tasks","tagname":"method","owner":"flow","id":"method-tasks","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-flow","short_doc":"Manage asyncronous operations. ...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/flow.html#flow' target='_blank'>flow.js</a></div></pre><div class='doc-contents'><p>Manage asyncronous operations.</p>\n\n<pre><code>flow(function (c) {\n    for (var i = 0; i &lt; 3; i += 1) {\n        c.inc();\n        ...\n        ...\n        xhr.onreadystatechange = function () {\n            if (xhr.readyState === 4) {\n                if (xhr.status === 200) {\n                    c.dec(null, JSON.parse(xhr.resposeText));\n                } else {\n                    c.dec({errorCode: xhr.status});\n                }\n            }\n        }\n    }\n}, function (c, err, results) {\n    //do something\n}, this); //context in which the funtions will run\n\n//Another way to use\nvar tasks = <a href=\"#!/api/flow-method-tasks\" rel=\"flow-method-tasks\" class=\"docClass\">flow.tasks</a>(...);\ntasks.execute();\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object (optional)<div class='sub-desc'>\n</div></li><li><span class='pre'>functions</span> : Function<div class='sub-desc'><p>func1, func2, ... funcN</p>\n</div></li><li><span class='pre'>scope</span> : Object (optional)<div class='sub-desc'>\n</div></li></ul></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-tasks' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='flow'>flow</span><br/><a href='source/flow.html#flow-method-tasks' target='_blank' class='view-source'>view source</a></div><a href='#!/api/flow-method-tasks' class='name expandable'>tasks</a>( <span class='pre'></span> ) : <a href=\"#!/api/Manager\" rel=\"Manager\" class=\"docClass\">Manager</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Same arguments as flow(). ...</div><div class='long'><p>Same arguments as flow(). The only difference is that the task isn't execute immediately.\nUse execute() method to start executing the list.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Manager\" rel=\"Manager\" class=\"docClass\">Manager</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});