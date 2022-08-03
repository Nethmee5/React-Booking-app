import React from 'react'
import '../serachitem/searchitem.css';

const Searchitem = () => {
  return (
    <div className='searchitem'>
        <img src="https://picsum.photos/seed/picsum/200/300" className='siImg'/>
        <div className='siDesc'>
            <h1 className='siTitle'>Tower Street Apartment</h1>
            <span className='siDistance'>5000m from center</span>
            <span className='siTaxO '>Free Airport taxi</span>
            <span className='siSubtitle'>Studio Apartment with Air Conditioning</span>
              <span className='sifeatures'>
                Entire studio + 1bathroom + 21n2 1 full bed

              </span>
              
              <span className='siCancel'>Free consultaion</span>
<span className='siCancelSubtitle'>
    You can cancel later,so lock in this great price today!</span>
    </div>      
      
      
      
      
      
      <div className='siDetails'>
      <div className='siRating'>
        <span>Excellent</span>
        <button>8.9</button>
        </div>
        <div className='siDetailTexts'>
          <span className='siPrice'>$123</span>
          <span className='siTaxZ'>Include taxes and </span>
        
          <button className='siCheckButton'>See avaialble</button>
        </div>
        </div>

        </div>


  )
}


export default Searchitem;
