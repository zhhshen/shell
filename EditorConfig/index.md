# 编辑器配置
---
什么是EditorConfig文件？
先看一个例子

```
# EditorConfig is awesome: https://EditorConfig.org

# top-most EditorConfig file
root = true

# Unix-style newlines with a newline ending every file
[*]
end_of_line = lf
insert_final_newline = true

# Matches multiple files with brace expansion notation
# Set default charset
[*.{js,py}]
charset = utf-8

# 4 space indentation
[*.py]
indent_style = space
indent_size = 4

# Tab indentation (no size specified)
[Makefile]
indent_style = tab

# Indentation override for all JS under lib directory
[lib/**.js]
indent_style = space
indent_size = 2

# Matches the exact files either package.json or .travis.yml
[{package.json,.travis.yml}]
indent_style = space
indent_size = 2
```
当打开一个文件时，EditorConfig插件会在打开的文件当前目录及其逐层父级目录中查找**.editorconfig**文件。如果找到根级目录或者配置文件中出现**root= true**, 查找就会终止。

editorconfig文件自上而下读取，找到的最新规则优先。匹配的editorconfig节中的属性按读取顺序应用，因此更近文件中的属性优先。

editorconfig使用正斜杠（/, 而不是反斜杠），用作路径分隔符，而octothorpes（#）或者semicolons(;)用作注释

**支持属性**

- indent_style: 设置为“制表符”或“空格”分别使用硬标签或软标签
- indent_size: 一个整数，用于定义每个缩进级别使用的列数和软选项卡的宽度（支持时）。设置为tab时，tab_width将使用（如果指定）的值。
- tab_width：一个整数，用于定义用于表示制表符的列数。默认值为，indent_size通常不需要指定。
- end_of_line：设置为lf，cr或crlf以控制换行符的表示方式。
- charset：设置为latin1，utf-8，utf-8-bom，utf-16be或utf-16le来控制字符集。
- trim_trailing_whitespace：设置为true以删除换行符前面的任何空白字符，并设置为false以确保不会。
- insert_final_newline：设置为真以换行符节能时，确保文件最终假，以确保它不会。
- root：应在任何部分之外的文件顶部指定的特殊属性。设置为true以停止.editorconfig在当前文件上搜索文件。

对于任何属性，unset的值是删除该属性的效果，即使之前已设置过

可以接受并且通常优选不指定某些EditorConfig属性。例如，tab_width除非它的值不同，否则无需指定indent_size。此外，当indent_style设置为tab时，可能需要保留indent_size未指定的内容，以便读者可以使用其首选缩进宽度查看文件。此外，如果项目中的属性未标准化（end_of_line例如），则最好将其留空。

