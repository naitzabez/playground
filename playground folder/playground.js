/* The playground.html should be left alone without any edits (unless you want to add more scripts)
   any html elements that you wish to add should be injected into general through "show playground"
   If the contribution that you're developed is intended to be an OFFLINE feature then you wont
   need to inject and can write into the general div manually (inside the playground.html). 
*/

/* A function that injects elements into the <div> with id="general" */
function showPlayground(){
    var home = document.getElementById('general'); // Main container
    home.innerHTML += '<div class="inject"> HTML Injection test </div>'; //Inject html code #1
    home.innerHTML += '<div class="inject"> Test1 </div>'; //Inject html code #2
    home.innerHTML += '<div class="inject"> Test2 </div>'; //Inject html code #3
}

/*Run "showPlayground" function */
showPlayground(); // <-- runs the function