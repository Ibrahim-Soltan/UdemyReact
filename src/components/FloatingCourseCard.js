import React from 'react'
import CardCSS from "./styles/FloatingCourseCard.module.css"

function CardFooter(){
  return(
    <div className={CardCSS.cardFooter}>
      <h4>Training 5 or more people?</h4>
      <p>Get your team access to 17,000+ top Udemy courses anytime, anywhere.</p>
      <button className={CardCSS.btn}>Try Udemy Business</button>
    </div>
    
  )
}

function FloatingCourseCard(props) {
  return (
    <>
      <div className={CardCSS.floatingCourseCard}>
          <img className={CardCSS.courseImg} src={props.img} alt="Course Banner"></img>
          <h3 className={CardCSS.price}>{`E£${props.price}`}</h3>
          <button className={CardCSS.btn} id ={CardCSS.addToCart}>Add to cart</button>
          <button className={CardCSS.btn}>Buy now</button>
          <span className={CardCSS.guarantee}>30-Day Money-Back Guarantee</span>
          <h5 className={CardCSS.featuresTitle}>This course includes:</h5>
          <ul className={CardCSS.features}>
              {props.onDemandVidhrs!==0 && <li><i className="fa-solid fa-display"aria-hidden="true"></i>  {`${props.onDemandVidhrs} hours on-demand video`}</li>}
              {props.articles!==0 && <li>{`${props.articles} article`}</li>}
              {props.downloadableResources && <li>{`${props.downloadableResources} downloadable resources`}</li>}
              {props.fullTimeAccess && <li>Full lifetime access</li>}
              {props.mobileTVAccess && <li>Access on mobile and TV</li>}
              {props.certificate && <li>Certificate of completion</li>}
          </ul>
          <div className={CardCSS.actions}>
            <span className={CardCSS.share}>Share</span>
            <span className={CardCSS.gift}>Gift this course</span>
            <span className={CardCSS.coupon}>Apply Coupon</span>
          </div>
          <hr className={CardCSS.line}></hr>
      </div>
      <CardFooter />
    </>
  )
}

export default FloatingCourseCard