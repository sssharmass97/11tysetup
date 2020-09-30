module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("admin");

    eleventyConfig.addPassthroughCopy("assets")

    return {
        
        passthroughFileCopy: true,
        markdownTemplateEngine: "njk",
        templateFormats: ["html", "njk", "md"],
        dir: {
            input: "src", 
            output: "_sites",
            include: "_includes"
        }
    
    }
}