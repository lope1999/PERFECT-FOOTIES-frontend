import React from 'react';
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non ea, sit sint recusandae voluptate delectus! Natus aspernatur exercitationem asperiores obcaecati beatae quos omnis, voluptatibus cum eius laborum optio mollitia ipsum.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est in exercitationem sint unde qui explicabo illum vero alias eos deleniti architecto reprehenderit, totam iste autem accusantium. Quam ipsa nisi aliquid?
        </p>
      </div>
    </div>
  )
}
