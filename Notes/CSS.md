
# About CSS

## What is CSS?

_CSS_ stands for **Cascading Style Sheets** and it's a styling language. It basically tells the browser how to represent an HTML document to the user like how to style text, how to layout the content, what colors to use and so on.

> [!KEEP IN MIND]
> HTML defines the structure of a web page, and CSS defines the styling of that web page.

When learning `CSS` we will often hear about terms _SASS_ & _LESS_.

![[sass&less.png]]

These are called as **pre-processors**, think about them as languages, because they extend the native language of _CSS_.

SASS and LESS are CSS, but with some added functionalities like variables, loops, if-else statements.

>Abbreviation
>_SASS_ - Syntactically Awesome Style Sheets
>_LESS_ - Leaner Style Sheets

```
key takeaways

1. `CSS` stands for Cascading Style Sheets and it's a `styling` language.
2. `CSS` basically tells the browser how to present an HTML document to the user.
3. Just like HTML, `CSS` is not a programming language because it's missing the logic part.
4. Remember: `HTML` defines the `structure` and `CSS` defines the `style` of a webpage.
5. Tools like `Sass` and `less` are `extending` the original CSS language by providing functionality like variables, loops and if/else statements.
```

---
## Adding CSS to an HTML Page

There are three ways we can add CSS to an HTML page, `inline`, `internal` and `external`.

>demo : 2_divElement

let's look at the inline method first,
### Inline

Basically means we're gonna add the CSS directly to an HTML element.

>[!Important]
>You should always keep presentation and structure separately.

### Internal

In Internal, we will use the style element inside the head element, and then write our CSS.

### External

External CSS is a way to separate the styling of a website from its HTML content. It involves placing CSS rules in a separate file with a `.css` extension. This file is linked to the HTML using a `<link>` element in the `<head>` section.

External CSS promotes modular design, reusability, and easier maintenance by allowing styles to be applied consistently across multiple web pages. It also enhances performance as the browser can cache the external CSS file for faster loading.

```
key takeaways

1. There are 3 ways we can add CSS to an HTML page: `inline`, `internal` and `external`.
2. The `inline` method implies using a `style` attribute on an element and it's considered `bad pratice`. DOn't use it.
3. Adding CSS `intentionally` means writing the CSS code inside a `<style>` element in the document's `<head>`. It's ok to use `occasionally` but not in production.
4. `External` CSS is written in a separate `.css` file and then loaded via a `<link>` element in the documents's `<head>`. This is the `recommended` way of loading CSS.
```

---

## Using CSS Selectors

The way CSS works is pretty simple. You tell the browser what elements you want to style, and then you tell the browser what elements you want to style, and then you tell it how to style those elements.

The first part, which is what elements to style, is typically done through selectors. So you're basically selecting what elements you want to work on.

The second part, how to style, is done through CSS rules.
### Anatomy of a selector and what type of selectors you can use


> demo : 2_divElement

Now, here is something that we haven't talked about, and that is `classes` and `ID` .
Classes and ID are both attributes that you can apply to an HTML element.

>_Class_ - something you can apply to an HTML element.
>_ID_ - Unique identifiers, which means you can apply an ID to a single element.

#### Universal Selector

universal selector is an **asterisk** (`*`), and this will select all the elements in the page.

#### Class Selector

The class selector is written like this, first a dot (.), and then the name of the class.

#### ID Selector

The ID selector starts with a hash sign (#), and then the name that i defined in the ID attribute.

>[!NOTE]
>CSS is read from top top bottom.

#### Type Selector

This selector selects all the elements that have the same node name.
Also we have _Selector List_ in *CSS* to group two or more types.

Selectors in a selector list can be of different types, such as element selectors, class selectors, ID selectors, etc.

Combining multiple selectors into a list allows you to efficiently apply the same styles to multiple elements without repeating the styles for each individual selector.

Before talking about the next selector,  which is called as _Descendant Combinator_

>demo : 8_cssSelectors

#### Descendant Selector

A descendant selector in CSS is used to select elements that are _descendants of a specified parent element_.

It allows you to target elements that are nested within another element hierarchy. The descendant selector is represented by a space (whitespace) between two selectors.

#### Attribute Selector

It will select any elements that have a given attribute.

The attribute selector in CSS is represented by square brackets `[]`. It allows you to target HTML elements based on the presence or specific values of their attributes.

```
key takeaways

1. CSS works by telling the browser `what` elements to style and `how` to style them.
2. CSS `selectors` are used to tell the browser `which` elements to style.
3. `Type selectors` will style all elements that have a certain `node name`. For example, the `div` selector will style all the `<div>` elements.
4. `Class and ID selectors` will style all the elements that have a specific `class` and, respectively `id`, attribute.
5. The " " `space` can be used as a `descendant combinator selector`. This will select all nodes that are `descendants` of the first element. For example, `div p` will match all the `<p>` elements inside a `<div>`.
6. You can apply the same CSS rules to `multiple` selectors. Just use a `comma` to group them, essentially creating a `selector list`. For example, `div`, `p` will match all the `<div>` and `<p>` elements.
7. The `universal selector (*)` selects `all elements`. You can also use it alongside the descendant combinator to select all elements that are descendants of another element. For example: `div *`
8. The `attribute selector` styles all the elements that have the given attribute. For example, `button[disabled]` selects all the `<button>` elements that have the `disabled` attribute.
```

---

## Working with Color in CSS

Probably one of the first styles you'll be applying in CSS is color.

> demo : 2_divElement

>[!CSS rules]
>collection of CSS properties that are applied to all of the elements that match the selector.

If you want to apply the same styles to a number of children, you can apply the styles directly to their parent and they'll be passed down.
In other words, children will inherit those properties from their parents.

### Color Formats

#### _HexaDecimal_

Represented by an **sRGB** color by using it's primary components, red, green and blue. Each component is written as a hex number.

The color value `#0099ff` can be interpreted as follows:

>- `00`: No red component (0 out of 255).
>- `99`: Green component at medium intensity (153 out of 255).
>- `ff`: Full blue component (255 out of 255).

In RGB color notation, the combination `#0099ff` results in a shade of blue with no red, a medium amount of green, and full blue intensity. This produces a vibrant blue color.

Alternatively, I can add two more digits representing opacity.

#### _RGB_

 The color format represents the levels of red, green, and blue. Adding transparency is simple using the `rgba` format, with 'a' denoting 'alpha'. A fourth parameter can be included, such as 0.675 for 67.5% transparency. A value of 1 signifies 100% opacity, while 0 means 0% opacity, rendering the color fully transparent.

> background-color: rgba(0, 153, 255, 0.67);

In this example, the `rgba` notation is used to create a color with blue as the dominant color, a medium amount of green, and 67% opacity.

#### _HSL_

Another format that's highly used, is **HSL** , this stands for _hue_, _saturation_ and _lightness_.

And this is represented by the first value being the hue or the position of the color on the color wheel. The second value represents saturation (like is it a vivid color or a dull color) and ranges from 0 to 100%. The third parameter represents lightness or luminosity, so how light is that color.

> background-color: hsl(43, 34%, 76%)

Also when working with color, we can also use keywords like **color: white**.

```
key takeaways

1. `color` and `background-color` are two of the most commonly used CSS properties for adding color.
2. The `color` CSS property sets the `foreground` color value of an element's `text and text decorations`.
3. The `background-color` CSS property sets the background color of an element.
4. Among the most commonly used formats for sRGB colors, we can find `hex`, `rgb` and `hsl`.
5. The `hex format` uses the `primary` color components (red, green and blue) written as hexadecimal numbers.
6. The `rgb format` expresses a color according to its `red`, `green` and `blue` components written either as numbers or percentages, where the number 255 corresponds to 100%.
```

---
## Let's Discover the CSS Units

As you're learning more and more about CSS properties, you'll see that most of these have numeric values. So what they have is a _number as a value_ and it have _units_.

We have the units that pertain to the environment that we're working with, so we have **pixels, ems, rems, percentages** and so on.

> demo : div_element

>[!NOTE]
>_pixel_ is an absolute unit whereas we also have relative units like _percentage_.

Also there are Other relative units we can use apart from percentages, those are _em_ and _rem_.

> __em__ - takes the font size of the parent element
> __rem__ - takes the font size of the html element

We can use the pixel, rem, percentage, em units in all sorts of properties, not just for font sizes or widths, we can set them for margins and paddings.

```
key takeaways

1. A lot of CSS properties have `numeric` values and most of those values use `units`.
2. On the web we can use various `units` to set various dimensions or create various layouts.
3. Among the most commonly used units in CSS we find `px`, `em`, `rem` and `%`.
4. The `px` unit sets an `absolute` size which is not usually influenced by external factors.
5. The `em` is a `ralative` unit that sets a size in relation to the `font size` of the parent element.
6. The `rem` is also a `relative` unit, but it works in relation to the `font size` of the `<html>` element.
7. The `%` is also a `relative` unit and it represents a `fraction` of some other value. In CSS, that other value is usually a dimension of the `parent` element.
```

>[!Annotation]
> As a beginner, these are the four units you need to be aware of , Once you are more comfortable with CSS, you will able to discover those other units yourself.

---
## Styling Text with CSS

Styling text in CSS is something that you'll be doing quite often because the majority of content in a webpage is text. Thankfully, CSS gives us some great tools we can use to style text any way we want.

> demo : Using Breaks to Separate content

```
key takeaways

1. CSS offers a lot of control over how text looks like.
2. `font-family`, `font-size` and `font-weight` are properties that cahnge the font you're using, the size of the text and the weight, respectively. You can also use `font-style` to switch to regular, italic or oblique.
3. The `text-transform` CSS property specifies how to `capitalize` an element's text. You can choose between `uppercase`, `lowercase` and a few others.
4. The `letter-spacing` property can be used to set the `horizontal spacing` between text and characters.
5. The `line-height` property is used to set the height of a `line box`. In other words, it changes the `distance between lines of text`.
6. You can align text in different ways by using the `text-align` property. For values you have `left` (which is the default), `center` and `right`. You can also use `start` and `end` as substitutes for `left` and `right`.
7. To change an element's appearance on mouse-over and mouse-press you can use the `:hover` and `:active` pseudo-classes. The `:active` pseudo-class is only applicable on a handful of elements (like buttons, links and certain inputs).
```

---

## Setting Dimensions in CSS

At some point in a project, you'll have to write some CSS to make an element bigger or smaller.

> demo : Setting Dimensions in CSS

In CSS, to make an element bigger or smaller, you would use the width and height properties. And they're self explanatory right, the `width` property changes an element's width, and the `height` property changes an element's height.

In terms of values for the width and the height, you can use absolute values like pixels or you can use relative values like `em`, `rem`, `percentage`, and you can even use some keywords, like auto,..

> [!NOTE]
> width and height only work on block and inline-block level elements.

Using `display: inline-block;` in CSS is a way to make an element behave like an inline-block element, allowing it to flow inline while still having block-level features.

You can also set relative elements like percentage and also set it to auto.

```
key takeaways

1. You can change an elements width or height by using the `width` and, respectively, `height` properties.
2. These accept the following value types: a `length` (expressed in `px`, `em`, `rem` and so on), a `percentage` or a `keyword` (for example: `auto`).
3. You can use the `min-width` and `max-width` to limit how `short` or `long` an element can be. The same is applicable for an element's height, by using the `min-height` and `max-height` properties.
4. You `cannot` change the width or height of an `inline` element.
```

---

## The CSS Box Model

The first thing you need to understand is in CSS, everything has a box around it, from images to paragraphs, from headings to spans.

> already explained in :  Block Vs Inline

Everything in CSS has a box around it, you must also understand that the box is not just a rectangle around an element, it's more complex than that. In fact, that box is made of several other boxes.

Have a Look at the CSS box model,..

