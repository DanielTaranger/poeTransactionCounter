Instructions
To use this script:

1. Copy This:
   ```
   (async function executeGitHubScript() {
    const url = "https://raw.githubusercontent.com/DanielTaranger/poeTransactionCounter/master/poeTransactionCounter.js";

    try {
        // Fetch the raw JavaScript file content
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Failed to fetch the script: ${response.statusText}`);
        }

        // Get the text content of the script
        const scriptContent = await response.text();

        // Execute the script in the current context
        eval(scriptContent);

        console.log("Script executed successfully!");
    } catch (error) {
        console.error("An error occurred:", error);
    }})();
    ```
2. Go to https://www.pathofexile.com/my-account/transactions
3. Right click your browser and select inspect element.
4. Go to console, paste (Ctrl + v) and hit enter. The browser may require you to type in a safety word to allow to paste scripts.

If you feel adventurous you can also save this Bookmarklet into your Bookmarks.

```
javascript:(function()%7Bfunction%20callback()%7Bconsole.log(%22dummy%20log%22)%7Dvar%20s%3Ddocument.createElement(%22script%22)%3Bs.src%3D%22https%3A%2F%2Fcdn.statically.io%2Fgh%2Fpeeteer1245%2FpoeTransactionCounter%2Fmaster%2FpoeTransactionCounter.js%22%3Bif(s.addEventListener)%7Bs.addEventListener(%22load%22%2Ccallback%2Cfalse)%7Delse%20if(s.readyState)%7Bs.onreadystatechange%3Dcallback%7Ddocument.body.appendChild(s)%3B%7D)()
```

This bookmarklet uses the statically CDN to fetch the current version of the js script and runs it.

Respective reddit thread:
https://www.reddit.com/r/pathofexile/comments/6fjm8w/toola_script_i_made_that_shows_how_much_you_spent/?sort=new
