
# Introduction
## Contents

<details>
	<summary>HTML</summary>
		<ol>
			<li>How websites are loaded ?</li>
			<li>What is HTML</li>
			<li>Let's create an HTML file</li>
			<li>HTML Elements & Tags</li>
			<li>Inline vs. Block-Level Elements</li>
			<li>The div element</li>
			<li>Text-Related elements</li>
			<li>Separating Content with Breaks</li>
			<li>Using Lists</li>
			<li>Working with Images</li>
			<li>Using Forms & Buttons</li>
			<li>Displaying Tabular Data With Tables</li>
			<li>HTML5 Sematic Elements</li>
		</ol>
</details>
<details>
	<summary>CSS</summary>
	<ol>
		<li> What is CSS?</li>
		<li> Adding CSS to an HTML page</li>
		<li> Using CSS selectors</li>
		<li> Working with Color in CSS</li>
		<li> Let's Discover the CSS Units</li>
		<li> Styling Text with CSS</li>
		<li> Setting Dimensions in CSS</li>
		<li> The CSS Box Model</li>
		<li> Working with Borders in CSS</li>
		<li> Using the display property in CSS</li>
		<li> Styling Lists in CSS</li>
		<li> Positioning Elements in CSS</li>
		<li>Styling Backgrounds in CSS</li>
		<li>Building Layouts with Flexbox and CSS Grid</li>
		<li>Working with Media Queries For Creating Responsive Websites</li>
	</ol>
</details>

---
## prerequisites

### HTML and CSS

These are Languages used in front-end web development. Front-end meaning the presentation layer visitors see.
### Brower

+ Google Chrome
+ Microsoft Edge
+ Mozilla FireFox

Each browser has it's own user agent stylesheet, which contains default styles for various HTML elements like headings, paragraphs, lists, links, etc.,
### The Code Editor

+ Visual Studio Code
+ Sublime Text
+ Atom
+ Brackets
### Mozilla Developer Network

A resource highly recommend to you, is MDN.
It's basically your vocabulary for anything related to HTML and CSS, and it also integrates quite well with VS code.

---
## How websites are loaded

Client (Browser) <--> Web Server

Client is someone requesting the resource, and server is providing the resource.

> [!NOTE]
> DOM stands for Document Object Model and it basically represents all the building blocks of the webpage and their structure. So paragraphs, images, divs, headings and so on. All of these  are represented in the DOM.

![[DOM-model.svg]](https://github.com/DilshadNirmal/WebDesign/blob/main/Notes/images/DOM-model.svg)

When the browser goes through the HTML file line by line and it constructs the DOM, it might get to certain resources that need to be loaded from the server.

---
## HTTP

HTTP stands for Hypertext Transfer Protocol. In simple terms, it's a language used for communication between client and server.
Now-a-days, we use HTTPS a more secured version of communication. 

> https://www.realtimecolors.com

This whole address is called URL which Stands for Uniform Resource Locator. Think of it as the address of a unique resource on the web.
Resources can be many things, `a Webpage`, `a Image`, `a CSS file`, `a Video file`, `a Audio file`, `a Font`, and so on.

![[url.png]](https://github.com/DilshadNirmal/WebDesign/blob/main/Notes/images/url.png)

>[!NOTE]
>+ *scheme* : indicates the protocol or the language the browser uses to represent the sourse.
>+ *character pattern*
>+ *authority* : usually contains the domain, but also can show a port number. You don't see a port number because the web server uses the standard ports of 80 and 443 to serve resources.
>+ *path to resource*
>+ *parameters* : preceded by a question mark, comes as a key-value pair and are separated by ampersand. parameters can be used by the derver for performing additional actions before returning the resource.
>+ *anchor* : think of these as bookmarks inside a page.
>+ _https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started#entity_references_including_special_characters_in_html_

```
key takeaways

1. Websites are hosted on special computers called servers and each webpage and web resource has a unique address defined by the URL.
2. The URL always contains the scheme and the authority and can optionally include a path to the resource, parameters and anchors.
3. To load a webpage or web resource, the client or browser sends a request to the server. The server responds to that request by sending the resource back to the client.
4. The communication between client and server is made using the Hypertext Transfer Protocol or HTTP. This is a language understood by both browser and server.
5. The difference between HTTP and HTTPS is that the latter is using encryption.
6. For insight into the inner-workings of a website, you can use your browser's Developer Tools.
```

