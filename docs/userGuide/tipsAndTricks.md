<variable name="title">Tips & Tricks</variable>

<frontmatter>
  title: "User Guide: {{ title | safe }}"
  header: header.md
  footer: footer.md
  siteNav: userGuideSections.md
</frontmatter>

# {{ title | safe }}

<span id="escapingCharacters">

##### Tip: Escaping Characters

For Markdown syntax: To display a literal character that are normally used for Markdown formatting, add a backslash (`\`) in front of the character.

<include src="outputBox.md" boilerplate >
<span id="code">

```markdown
\* item 1

* item 1

```
</span>
<span id="output">

\* item 1

* item 1
</span>
</include>
</span>

<small>More info: [https://www.markdownguide.org/basic-syntax#escaping-characters](https://www.markdownguide.org/basic-syntax#escaping-characters)</small>

</span>

##### Problem: Unwanted starting space in links and triggers

When you use links or triggers, you may encounter a situation where an unwanted space is being generated by MarkBind:


* Code:<br>
  ```
  The
  [[link](https://example.com)].
  ```

* Expected output:
  <code>The [[link](https://example.com)].</code>

* Actual output (notice the additional space in front of the link):
  <code>The [ [link](https://example.com)].</code>

* Solution:
  Wrap the link or trigger around with `<md>` tags.
  ```
  The
  <md>[[link](https://example.com)]</md>.
  ```
