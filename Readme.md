<!-- default badges list -->
![](https://img.shields.io/endpoint?url=https://codecentral.devexpress.com/api/v1/VersionRange/128596823/17.1.6%2B)
[![](https://img.shields.io/badge/Open_in_DevExpress_Support_Center-FF7200?style=flat-square&logo=DevExpress&logoColor=white)](https://supportcenter.devexpress.com/ticket/details/T561300)
[![](https://img.shields.io/badge/📖_How_to_use_DevExpress_Examples-e9f6fc?style=flat-square)](https://docs.devexpress.com/GeneralInformation/403183)
<!-- default badges end -->
<!-- default file list -->
*Files to look at*:

* [bower.json](./CS/ClientSide/bower.json) (VB: [bower.json](./VB/ClientSide/bower.json))
* **[example.jsx](./CS/ClientSide/example.jsx) (VB: [example.jsx](./VB/ClientSide/example.jsx))**
* [index.html](./CS/ClientSide/index.html) (VB: [index.html](./VB/ClientSide/index.html))
* [style.css](./CS/ClientSide/style.css)
* [WebDocumentViewerController.cs](./CS/ServerSide/Controllers/WebDocumentViewerController.cs) (VB: [WebDocumentViewerController.vb](./VB/ServerSide/Controllers/WebDocumentViewerController.vb))
* [Global.asax.cs](./CS/ServerSide/Global.asax.cs) (VB: [Global.asax.vb](./VB/ServerSide/Global.asax.vb))
* [MyReportStorage.cs](./CS/ServerSide/MyReportStorage.cs) (VB: [MyReportStorage.vb](./VB/ServerSide/MyReportStorage.vb))
<!-- default file list end -->
# How to Use the Web Document Viewer in JavaScript with React Library and Bower Package Manager


This example demonstrates how to use the [HTML5 Document Viewer](https://docs.devexpress.com/XtraReports/17738) in JavaScript with [React](https://reactjs.org/).

The example consists of two parts: 
1. A server (backend) project in ASP.NET MVC implementation (the <strong>ServerSide </strong>solution). It enables the cross-domain requests (Access-Control-Allow-Origin) and implements a custom report storage.
2. A client (frontend) part (the <strong>ClientSide </strong>folder) that includes styles, scripts and HTML-templates. 

To start the project, build and run the ServerSide solution. Subsequently, navigate to the <strong>ClienSide </strong>folder, open the console and enter the following command:

```bower install```

The package manager builds the client-side JavaScript application and launches the browser.

The [Document Viewer Integration in React](https://docs.devexpress.com/XtraReports/119338) document contains a step-by-step guide that describes how to create this project.

<b>See also:</b>
* [How to Use the Document Viewer in JavaScript with React Library and Npm Package Manager](https://github.com/DevExpress-Examples/reporting-document-viewer-in-javascript-with-react)
* [How to Use the Report Designer in JavaScript with React Library and Npm Package Manager](https://github.com/DevExpress-Examples/reporting-eud-designer-in-javascript-with-react)

