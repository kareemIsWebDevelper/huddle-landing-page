app.component('product-display', {
    /*html*/
    template: 
    `
    <header>
      <img class="icon" :src="icon" :alt="description">
    </header>

    <section>
      <div id="mockup"></div>
      
        <article>
          <h1>Build The Community<br>Your Fans Will Love</h1><br>
          <p>Huddle re-imagines the way we build communities. You have<br>a voice, but so does your audience. Create connections with<br>your users as you engage in genuine discussion.</p><br>
          <button>Register</button>
        </article>
    </section>
    
    
  
    <footer>
        <div class="circle"><a href="#"><i class="bi bi-facebook"></i></a></div>
        <div class="circle"><a href="#"><i class="bi bi-twitter"></i></a></div>
        <div class="circle"><a href="#"><i class="bi bi-instagram"></i></a></div>
        
        
    </footer>
    `,
    data: function (){
        return {
            icon: './images/logo.svg',
            description: 'image is loading',
        }
    }
})