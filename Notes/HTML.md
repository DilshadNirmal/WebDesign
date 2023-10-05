
# About HTML

## What is HTML ?

HTML stands for Hyper Text Markup Language and it's the code that defines the structure and content of a webpage.
You basically have these entities which are called tags that you can use to wrap the various parts of your content with.

> demo :

HTML is about writing your content the way you want it and then using these entities called tags to wrap different parts of your content.

>[!IMPORTANT]
>HTML is not a programming language.
>one of the defining factors of a programming language is logic.

Ultimately, HTML is used to display the webpage or webpage to the visitors regardless of what programming language is used in the backend.

> [!NOTE]
> HTML is a markup language that allows us to structure the content in a webpage and also allows it to be formatted using CSS.

```
key takeaways

1. HTML stands for HyperText Markup Language and it's the code that defines the structure and content of a webpage.
2. In HTML you can use different elements to structure your content into paragraphs, headings, lists and so on.
3. HTML is not a programming language.
4. Browsers will always render HTML code, regardless of what programming languages are used behind the scenes.
```

---
## Let's Create an HTML file

> demo : index.html

> [!NOTE]
> Index.html is the file that the browser will always open first.

### Structure of HTML

The very first thing, you need to write in an HTML file is the DOCTYPE.

In previous versions of HTML, we would use something like this...

> !DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd"

Or, if we were using HTML4 we would use something like this..

> !DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"

We'll talk about html versions later on.....

> !DOCTYPE html

Next, will be our html element, which will hold our HTML content in the page.
 
> html

For the html element, we can actually apply an attribute called lang, this allows us to specify what language the document is in.

> html lang="en-us"

This is great for search engines, for accessibility, and it also helps browsers localize the content.
Next will be the head element, which will contain critical information about the webpage, that's not displayed in the browser.
It can contain information like page title.

> head

There will be title element inside of the head element to display the content of the page.

> title

Other things to put inside head element, like meta information.
You can specify the page's character encoding,
  
> meta charset="utf-8"
> meta name="viewport" content="width=device-width, initial-scale=1.0"

we have another tag for viewport information, this just allows that page to be displayed correctly on mobile devices.
You can also provide description, the keywords, and the author who did this.

> meta name="description" content="Course about HTML and CSS"
> meta name="keywords" content="HTML, CSS, Beginners, Course, Tutorial"
> meta name="author" content="Dilshad Nirmal"

All of this is very important information for search engines, because that's how you tell search engines what the page is about.

You can also display links to CSS files or other resources here in the head of the document.

> link rel="stylesheet" href="style.css"

Following that will be body element, which will display the content in the browser.

> body

```
key takeaways

1. You can create an HTML file in any text editor but it's best you use a dedicated code editor.
2. Every HTML file starts with the `doctype declaration` which tells the browser what type of HTML it uses.
3. Every HTML file contains and `html` element which, in turn, contains the `head` and `body` elements.
4. The `head` element is used to give the browser information about the page like the `title`, `description` or `keywords`. Any external resources like CSS or JavaScript files are linked here as well.
5. The `body` element contains all the content that will be displayed in the browser.
```

---
## HTML Elements and Tags

### Difference between HTML Element and Tag

**HTML Element**
An element is a paragraph or a heading or an image or any HTML building block basically.

**HTML Tag**
however, html tags are part of the element.

![[HTML_E&T.png]](https://github.com/DilshadNirmal/WebDesign/blob/main/Notes/images/HTML_E%26T.png)

An Element is made of content placed between an opening and a closing tag.
The two tags are the same except the closing one has a slash in front of the keyword.  
There are certain elements that are self-closing, which means they're missing the closing tag.

**Self Closing Tags**

![[self_C.png]](https://github.com/DilshadNirmal/WebDesign/blob/main/Notes/images/self_C.png)

> [!NOTE]
> Elements that have no content are called empty elements.

### Attribute

An attribute contains additional information about that element.

![[Attribute.png]](https://github.com/DilshadNirmal/WebDesign/blob/main/Notes/images/Attribute.png)

Information that doesn't appear in the actual content.
One thing they have in common is their structure, each attribute has a name and most have at least one value.

![[Ano_Att.png]](https://github.com/DilshadNirmal/WebDesign/blob/main/Notes/images/Ano_Att.png)

If the attribute has multiple values, we separate them with a space.

**Empty attributes**
Some attributes are empty where only the name is displayed.

![[Emp_Att.png]](https://github.com/DilshadNirmal/WebDesign/blob/main/Notes/images/Emp_Att.png)

Also in HTML, we have something called Data Attributes, which we can also be used without a value.

### HTML Comments

A comment is basically a line of code that is ignored by the compiler.
In HTML, that line of code is ignored by the browser.

```
key takeaways

1. HTML `elements` and `tags` are different things, but these terms are used interchangeably.
2. An html element is usually made of content placed between an `opening ` and a `closing` tag.
3. Certain elements are `self-closing` and don't have content. These are called `empty elements`.
4. HTML attributes contain `additional information` about an element and are usually written as a `key-value` pair: an attribute name and a value.
5. Not all attributes require a value (for example disabled or autofocus) and there are some that accept `multiple` values (for example class).
6. HTML comments are used purely as references for the developer and are ignored by the browser.
```

---
## Inline vs. Block-level Elements

To understand  how inline is different than block, you must understand how content flows in an HTML document.

> [!IMPORTANT]
> Inline --> associate it with same line i.e., Horizontal
> Block --> associate it with Vertical

![[IL_v_B.png]](https://github.com/DilshadNirmal/WebDesign/blob/main/Notes/images/IL_v_B.png)

> demo : 1_block Vs Inline

> [!NOTE]
> block level elements can accept `width` and `height`, and also `margins` on the top and bottom.
> inline elements `cannot accept that`.

> *Block Level Element*

![[blockElement.png]](https://github.com/DilshadNirmal/WebDesign/blob/main/Notes/images/blockElement.png)

![[essensBlock.png]](https://github.com/DilshadNirmal/WebDesign/blob/main/Notes/images/essensBlock.png)

> *Inline level Element*

![[inlineElement.png]](https://github.com/DilshadNirmal/WebDesign/blob/main/Notes/images/inlineElement.png)

![[EssensInline.png]](https://github.com/DilshadNirmal/WebDesign/blob/main/Notes/images/EssensInline.png)

```
key takeaways

1. HTML has 2 types of elements: `block-level` and `inline-level`.
2. `Block` elements always start on a `new line`, occupy `all the available horizontal space`, and `stack` on top of each other.
3. `Block` elements accept `width` and `height` properties, as well as top and bottom margins.
4. `Inline` elements can start `anywhere inside` a line, they can sit `next to other` inline elements and they're only as wide as their content.
5. `Inline` elements do `not` accept width and height properties or top and bottom margins.
6. There are lots of HTML elements to remember, but you should focus on the most `commonly used ones`.
```

---
## The DIV Element

The div is a block level element. Other than that, it has no real effect on the content of a website. It's a generic container.

> demo : 2_div element

```
key takeaways
  
1. The `div` is a `block-level` element that mainly serves as a container for other content.
2. `div` elements can be used to group elements and also be styled with `CSS`.
```

---
## Text-related Elements

In HTML, we have lot of text-related elements that allow us to properly structure and organize the content.

> demo : 3_text Related
### Headings

Let's start with Headings, Headings or section headings are used to organize the content in logical parts.
We have six of them --> H1 - H6

>[!NOTE]
>H1 is the most important
>H6 is the least important

You should only have one H1 element per page, cause that's the most important heading.
Actually, HTML specification does allow you to use multiple `h1` elements in a page.

>[!IMPORTANT]
>Using headings is super important because the Search engines will use these headings to index your page and it really helps with `SEO`.
### Paragraphs

You should never leave any text hanging around without any kind of tags around it. Because it makes it impossible for you to target that bit in CSS later on.
Paragraphs are block level elements, so they will force a new line which means subsequent paragraphs will just be displayed below.
### Strong

The Strong is an inline elements that indicates that the piece of text content is very important.
This element is also called as strong importance element, you would use this element on content that needs to reflect urgency seriousness, and browsers render it as bold.
### Emphasis element

Another inline element that's used to emphasize a piece of content.
Browser will display it in `italic` but a `screen reader` actually puts more emphasis when reading that text loud.
### Cite common elements

Commonly used as small element and this is for displaying small print, like copyright information, like that which has a bit less importance, and you don't want it to stand out as much as regular text.
### Anchor elements

Commonly referred as links.
You would use it to create a hyperlink to other pages or to other sections inside the same page.
#### Structure of anchor tag

In our case, the attribute is `href`, and it contains a URL or URL fragment that the hyperlink points to.
One more attribute that is more commonly used is `Target`, so it allows us to specify where the contents that the link points to will be displayed.
URL here doesn't necessarily have to point to a different page, it can point to a different resource altogether.
### Quotation

A quotation is basically when you take content from somewhere else, you display it in your own page, then you provide a link to that original content saying that `this peice of information is quoted from the source`.
To quote we can use a `block level quotation` or an `inline quotation`.
inline quotation uses the tag `q`, and block level quotation is `blockquote`, this will be the most used.
You could also use `cite` attribute.

```
key takeaways

1. HTML has a lot of text-related elements you can use to organize the content.
2. Headings (`H1` through `H6`) are used to organize the content in order of importance.
3. Paragraphs (`p`) are used to break-up content in more manageable pieces.
4. The anchor element (`a`) is used for creating hyperlinks to web pages, files or any other resources accessible via URL.
5. The `blockquote` is a block-level quotation element which can be used to display quoted content.
6. The `strong importance element` (`strong`) indicates that its contents have strong importance or urgency and browsers typically render this in bold type.
7. The `emphasis element` (`em`) is used to display emphasized text and the content inside is usually displayed in italic.
8. The `small` html element usually represents small print, like copyright or legal text and it's usually rendered with one font-size smaller.
```

---
## Separating Content with Breaks

We use them to separate content in HTML, and technical term is `break`.

> [!NOTE]
> There are no separator element in HTML, but there are break elements.

There are two elements in HTML for break.,
1. the line break.
2. the thematic break, or also called horizontal rule.

> demo : 4_Separating Content

The sole purpose of breaking up a line, it's gonna make whatever content follows be displayed on a new line.
The purpose of `thematic break` is not just to render a line, but to semantically separate sections.

```
key takeaways

1. The `line break element` (`br`) produces a line break in text and it's useful for writing content that needs division between lines (like an address for example).
2. The `thematic break` or `horizontal rule` element (`hr`) is a semantic break you can use to divide paragraphs or different text blocks. Being semantic also means that search engines will consider the content separation.
```

---
## Using Lists

HTML has three list elements.
1. Ordered list or `ol`
2. Unordered list or `ul`
3. Definition list (description list) or `dl`

> demo : 5_lists
  
The only difference between ordered and unordered list is the way the list items are being displayed or the actual marker of the list item.

```
key takeaways

1. HTML has 3 list elements: `ordered list` (ol), `unordered list` (ul) and `definition list` (dl).
2. The `ordered list element` (ol) represents an ordered list of items that are usually displayed as a numbered list.
3. The `unordered list element` (ul) represents an unordered list of items that are usually displayed as a bulleted list.
4. The list items in both ordered and unordered lists are displayed using the `list item element` or `li`.
```

---
## Working with Images

There are several ways to add images to a web page, but the easiest one is using the `<img>` tag (or as specialists refer to it: the _image embed element_).  

> demo : 5_lists

`<Img>` tag by default provides with two attributes, `src` -  is a mandatory one in which we specify the path to the image and `alt` - is optional but incredibly useful, it's purpose is to display a piece of text or to provide text content to the screen readers.
### SVG vs. PNG

`png` is a raster format, the `svg` is a vector format.

The vector format will maintain it's sharpness regardless of how big or small that image is.
However, the raster format is made of pixels. So if you make it super, super big, it's gonna start losing that sharpness.
For anything that can be displayed as a vector, use `SVG`.
For still images, `JPEG` & `PNG` is a great option.

`PNG` is great cause they have a transparent background and offers better quality than `JPEG`.
### Width & Height attribute

You can set a width and height to an image by using the width and height attributes in HTML.
You probably noticed is that the resizing was proportional.
So, when we say make the `width` of this image `50%` , by default the browser will resize the image proportionally. It's gonna make the width the amount we want and the height will be calculated automatically.

> [!IMPORTANT]
> I won't prefer use the sizing method for images in `HTML`, prefer to resize them from `CSS` and just keep the `HTML` for structure.
### Limited by Browsers

HTML supports all kinds of images, so you're not limited by that.
What you are actually limited by is the browser support, some browsers support certain image formats while other's don't.
### Acronym

- JPEG - Joint Photographic Experts Group
- PNG - Portable Network Graphics
- SVG - Scalable Vector Graphics
### Other Image Formats

+ GIF - Graphics Interchange Format
+ WEBP - Web Picture

gif's are usually reserved for animated images and webp format is great for all around.
  
```
key takeaways
  
1. The `image embed element` or in short `<img>` represents the easiest way to embed an image in a web document.
2. The path to the image is defined in the `src` attribute which is required.
3. The `alt` attribute contains a text description of the image which isn't required, but highly recommended.
4. The content of the `alt` attribute (also known as alt text) is read by `screen readers` and also displayed on the page if the `image cannot be loaded`.
5. You can use both the `width` and `height` attributes on the `<img>` element to set the intrinsic size of the image.
6. The most commonly used image formats on the web are: GIF, JPEG, PNG, SVG and Webp.
7. For icons or images that need to preserve their sharpness at various sizes, use the vector format `SVG`.
```

---
## Using Forms and Buttons

Forms are essential components in HTML because they allow for user input.
A Form component by itself is useless. What you need to do is populate that form component with other form-related components like inputs and buttons and text.
Forms are the most complex elements in HTML.

> demo : 6_forms&button

### Form element

Form elements has two attributes, one of them is `action` and the other is `method`.
Action is basically a path to the file the will receive the form information on submit. You can also leave it blank and that form information will be submitted to the current page.
The `Action` is where you will specify where the form information will be sent.

The `Method` represents how the form information will be sent, basically there are two options, `get` or `post`.
If you use the `get` method, the form information will be sent or will be attached to the URL.
Well, the `post` is the most secured way of sending that information.

>[!NOTE]
>Always assign a more precise value to the `value` attribute of `<option>` elements within HTML forms. The actual visible text is not transmitted to the server; instead, the specifically designated `value` is sent.

  
>[!IMPORTANT]
>Writing HTML is about figuring out, how to structure it, so it's easier for me to style later using CSS!

  
```
key takeaways

1. `Forms` are essential components in HTML because they allow `user input`.
2. Among the most common input types we can find `text`, `email`, `password`, `select`, `checkbox` and `radio`.
3. Clicking on a label that's linked to an input will `focus` that input.
4. Checkboxes and radio buttons can be `grouped` by using the same `name attribute`.
5. The `<textarea>` element is used for `large content`, such as messages.
6. In order to function properly, `buttons` should be placed `inside` the `<form>` element. Alternatively, you can use the `form` attribute on an external button to point to the correct form.
7. Pressing a button that's inside a form or is linked to that form will execute a `submit` action.
```

---
## Displaying Tabular Data with Tables

In the early days of web, tables were used extensively, because we used to make layouts with them. So a web page would be this big table that would kind of compartmentalize to create the header, the main content, the sidebar, the footer, and so on.

> demo : 7_Tables

```
key takeaways

1. In the early days of the web, `tables` were being used to create `layouts`. Nowadays, this pratice should be `avoided` because there are much better options: for example `Flexbox` or `CSS Grid Layout`.
2. `Tables` should be used `solely` for displaying `tabular data`.
3. In a table, the `<tr>` element is used for `table rows`, the `<th>` for `table headers` and the `<td>` for `table data cells`.
4. Optionally, you can use the `<thead>`, `<tbody>` and `<tfoot>` elements for wrapping various parts of the table contents.
```

>[!HOORAY🎉]
>lets move on to the final lesson in the HTML chapter.

---
## HTML5 Semantic Elements

HTML5 is more of a fancy word nowadays. Sure, it refers to the latest version of HTML which was released back in 2014, because before that, we were using HTML 4.01,....
Then why it's a fancy word, because if we're talking strictly about the language, then we should refer to it as the living standard.
And currently, the living standard doesn't have a version.

>[!NOTE]
>HTML's Living Standard is a dynamic, evolving specification by WHATWG. It ensures up-to-date guidance for web developers, incorporating new features and changes continuously, without relying on version numbers like HTML5 or HTML6. This approach reflects the rapidly changing web technology landscape.

HTML5 represents a wider array of technologies that include `enhanced JavaScript API's`, `multimedia supports`, and `new video formats`, and lot more.

Among the changes that came with HTML5, we can find a couple of new HTML elements.
And these are called semantic elements.

![semanticElements](/images/SemanticElements.png)

The full list is quite large, and honestly, there's no point in you learning all of the new elements.
These are some of the most used semantic elements, and it's worth spending time to learn when to use each one.
### Short Introduction

#### What is Semantic Element?

In programming, semantics refer to the meaning of a piece of code.
In HTML, a semantic element clearly describes it's meaning to both the browser and developer.

A semantic element is hardly any different from a div, for example.
The div element, the generic container, can hold any type of content. But the element itself, the div, doesn't offer any information regarding the nature of that content.
On the other hand, a semantic element like nav, clearly describes its contents so that the developer and browser know that whatever is inside that nav is used for navigation.

![nav](/images/nav.png)

#### Why should we use semantic elements?

First of all the code is easier to read.
Notice how much easier to read and understand the code on the left, compared to one on the right.

![divVsSemantic](/images/div_vs_semantics.png)

This is even more obvious when you're dealing with large amounts of code.
And second of all they're better in terms of accessibility, assistive technologies like screen readers will be able to understand how the content is structured.

That means people who use screen readers will have a much better experience, also search engines will be able to map out your content a little bit better, with the semantic elements. So that in turn help with SEO.

>[!NOTE]
>SEO (Search Engine Optimization) is about making your website visible and easily found on search engines like Google. By using specific techniques like choosing the right keywords, creating quality content, and optimizing your website's structure, you can improve your site's chances of appearing higher in search results. This helps attract more visitors and potential customers to your website.

#### The `<header>` element

This is generally found at the top of a document, an article or a section and it contains the main heading or title of that section, document or article. It can also contain navigation and even search elements.
#### The `<footer>` element

This is similar to the header in pretty much every way, except you usually find it at the bottom of a document, article or section. It usually contains meta information like copyright data, author details, various links that don't belong anywhere else and so on.
#### The `<nav>` element

The nav element contains navigation links, either within the same document or to other documents. Examples include breadcrumbs, menus and tables of content.
#### The `<aside>` element

This holds content that's related to the main content, but it's not really part of it. For example, you could use an aside element to display a definition of a certain term used in the main content. It's like a side-note if you will.
#### The `<main>` element

The main element represents the dominant content in a document. It other words, it holds content that is directly related to the main topic of the document. For example, in a blog post, the content of the post should be placed in a main element.

> [!NOTE]
> The main element should only be used once per page, because you just have one main content.

#### The `<section>` and `<article>` elements

Both of these are good for sectioning content and you'll often see them being used interchangeably. Which one you should use and when depends on the context. Usually, an article is used for content that can be distributed independently while a section should be used more for grouping related content.

> [!Prioritization]
> While understanding semantic elements is valuable, there are more crucial aspects to prioritize in web development.

```
key takeaways

1. A `semantic` element clearly describes its `meaning` to both the browser and developer.
2. Using `semantic elements` makes the code more `readable` but also more `accessible` to search engines and assistive technologies like screen readers.
3. HTML has a lot of semantic elements and some of these were introduced in 2014 with what we call `HTML5`. Among these, we can find `<header>`, `<footer>`, `<nav>`, `<aside>`, `<main>`, `<article>` and `<section>`.
4. The `<header>` and `<footer>` are found at the `top` and respectively, the `bottom` of a document, article or section and contain headings, meta information and even navigation links.
5. The `<nav>` element is used purely for `navigation` tools.
6. The `<main>` element holds content that is related to the main one, but it's not a direct part of it.
7. Finally, `<section>` and `<article>` are great for `sectioning` content and you'll often find them being used interchangeably. `<section>` should be used for grouping related content, while `<article>` is best used for content that can be distributed independently.
```

> go to [[CSS]]



