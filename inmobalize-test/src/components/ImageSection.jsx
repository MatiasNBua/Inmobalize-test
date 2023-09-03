import image from '../assets/imagen.jpg'

export default function ImageSection() {

  return (
    <section className='flex flex-col bg-grey'>
      <div data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className='bg-grey'>
       <img src={image} alt="" />
       <img src={image} alt="" />
       <img src={image} alt="" />
       <img src={image} alt="" /> 
      </div>


    </section>
  )
}
