# jQuery.masterPage.js
A master page engine based on jQuery

## References
jQuery 1.11.1 (Tested, compatibility to earlier version is not guaranteed)

## Usage

### Make master page

Using jsp as demostraction.

Complete HTML document format should be formed in the master page file. Use attribute **masterPlaceHoler** as the place holder, set the place holder's name as the value of the attribute. Like this
```HTML
	<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
	<!DOCTYPE HTML>
	<html>
		<head>
			<title masterPlaceHolder="title">Default Title</title>
			<meta http-equiv="content-type" content="text/html; charset=utf-8" />
			<script type="text/javascript" src="js/jquery-1.11.1.min.js"></script>
			<script type="text/javascript" src="js/jquery.masterPage.js"></script>
			<link rel="StyleSheet" src="css/jquery.masterPage.css" />
			<!-- TODO: add necessary javascript libs or style files here -->
		</head>
		<body>
			<div class="masterTop">
				<div class="masterLogo"></div>
				<div class="masterTitle" masterPlaceHolder="title">Default Title</div>
				<div class="masterNavButtons">
					<!-- TODO: add common link buttons for navigation here -->
				</div>
				<div class="masterLoginPanel">
					<!-- TODO: add common link buttons for login/logout here -->
				</div>
			</div>
			<div class="masterBody" masterPlaceHolder="body"></div>
			<div class="masterTail">
				<!-- TODO: add common bottom staffs here -->
			</div>
		</body>
	</html>
```
Three place holders appear in the demostration are
```HTML
	<title masterPlaceHolder="title">Deafult Title</title>
```
```HTML
	<div class="masterTitle" masterPlaceHolder="title">Default Title</div>
```
```HTML
	<div class="masterBody" masterPlaceHolder="body"></div>
```

Default implementation for place holders can be used. When the application page using that master page does not implement them, the default implementations will be used. Just like the place holder 'title' in the case above.

A single place holder can be used in master page any times as wish, just keep using the same name, like the place holder 'title' above.

**NOTICIE**

Anything as common staff define in master page, can be visited in the page that applicating the master page, like javascript libs, style sheet files, functions, variables and styles. Be sure to avoid naming confliction accordingly.

### Applicating master page

Use jsp as demostration, too.

Reference the master page first, using format
```HTML
	<%@ include file="PATH TO MASTER PAGE" %>
```

Then implement the place holders like this
```HTML
	<div masterTag="NAME OF PLACE HOLDER">
		<!-- TODO: add anything necessary -->
	</div>
```
Only element **div** should be use to indicate the place holder, and any other attribute should not be appended, except **masterTag**.

When page ready event is needed, the global function named **pageLoad()** is strongly recommended the do the job, instead of *$(document).ready()* and *onload* event on *body* element. The pageLoad() function can assure the accomplishment of the master parse mechanism.

If there is no pageLoad() function in the page, a warning message will appear in the console of the browser. Ignore it if really don't want to write the pageLoad() function.

Suppose the demostracted master page above saved in file /view/master/demoMaster.jsp, the whole file that applicating the master page should like this
```HTML
	<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
	<%@ include file="/view/masters/demoMaster.jsp" %>
	<div masterTag="title">Demo Page for jQuery Master Page plugin</div>
	<div masterTag="body">
		<p>Hello World!</p>
		<div id="txtResult"></div>
	</div>
	<!-- TODO: add any javascript libs / style sheet files / local styles here -->
	<script type="text/javascript">
		function pageLoad() {
			$('#txtResult').text("Ready to Go");
		}
	</script>
```

**NOTICE**

1. Default implementation defined in master page will be used, when the absence of implementation to corresponding place holder happens in application page;

2. Implementation of place holders will be ignored, if implemented in application page but not used in master page.

3. Any thing define in master page, can be seen in application page. Like scripts file references, style file references, local scripts and local styles. So make sure to avoid naming confliction between master/application pages.

### P.S.

This is a front end javascript plugin for master page mechanism, all jobs' done in the browser.

In the enviroument of jsp, it worked fine, is tested & has been made use during a project. Theoretically it can also work with any dynamical web application, like ASP/ASP.NET, PHP, etc. Just replace the corresponding part in the header, to include(reference) the master page into the content flow on server side. This is not tested, and no guaranteed made here. Anyone would like to paticipate, is welcomed.

This plugin is design for multipage web application, not compatible with any Single Page Application framework.
