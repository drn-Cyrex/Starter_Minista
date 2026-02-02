//import './NewHeader.scss'

const NewHeader = () => {


   return (

      <header className='new-header'>
         <div className="logo">LOGO</div>

         <div class="nav-wrap">
            <div class="bubble active"></div>
            <div class="bubble hover"></div>
            <nav class="nav">
               <a class="active" href="#">Projects</a>
               <a href="#">Gallery</a>
               <a href="#">Studio</a>
               <a href="#">Profile</a>
            </nav>
         </div>

      </header>
   )
}

export default NewHeader