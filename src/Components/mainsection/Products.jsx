import React from 'react'
import './products.css'
import product1 from '../static/product1.jpg'
import product2 from '../static/product2.jpg'
import product3 from '../static/product3.png'
import designimage from '../static/designimage.jpg'

const Products = () => {
  return (
    <>
      {/* first section */}
      <div className="productmaster">
        <div className="productcontainer">
          <div className="productimagecontainer">
            <img src={product1} alt="imageofproduct1" />
          </div>
          <div className="description">
            <div className="descriptionheading">What's Hemp?</div>
            <div className="descriptionpara">
              Hemp according to the Vedas is the first of five sacred plants. A
              rare plant whose every part can be used. It is an environment
              friendly, sustainable, and climate-adaptive crop making it a very
              sustainable plant that can grow in the heterogeneity of
              environments. It is packed with amino acids and beneficial
              antioxidants that makes hemp nothing less than Magic. This
              planet-friendly plant is extremely sustainable and nutritious at
              the same time.
            </div>
          </div>
        </div>
        <div className="productcontainer productcontainer2">
          <div className="description">
            <div className="descriptionheading">What's Cordyceps?</div>
            <div className="descriptionpara">
              Cordyceps is used by modern herbalists to reward healthy stamina
              and boost energy levels. Also known as Himalayan Gold, this
              caterpillar fungus is found predominantly in Himalayan alpine
              pastures. Keeda Jadi is how locals address this insect herb.
              Cordyceps grow at high altitudes and mature in the thick Himalayan
              foothills. Cordyceps is a highly valued ingredient in Ayurverda.
              Cordyceps was fed and eaten in ancient times as a diet and
              supplement. It is the world's most expensive fungus. Cordyceps
              Militaris is now grown commercially in laboratories for herbal
              remedies and supplements. Hence, it is vegan.
            </div>
          </div>
          <div className="productimagecontainer">
            <img src={product2} alt="product2" />
          </div>
        </div>
        <div className="productcontainer">
          <div className="productimagecontainer">
            <img src={product3} alt="product3" />
          </div>
          <div className="description">
            <div className="descriptionheading">What's Kahwa?</div>
            <div className="descriptionpara">
              Also known as kehwa chai, Kahwa originates from this heavenly land
              which is home to mystic landscapes, and this land is certainly
              blessed with the best of nature- Kashmir. This kahwa is purely a
              natural product that has a blend of spell-bounding aromas and is
              wonderful in taste. Evo-Kahwa is ‘'Celebration in a Cup" and
              leaves you with a feeling of warmth. This fine tea is an explosion
              to the buds, it is undoubtedly heart-warming and exotic.
            </div>
          </div>
        </div>
      </div>

      {/* second section */}
      <div className="videomasterbackgroundcolor">
        <div className="videomaster">
          <div className="videoheading">Healthy life with Evoke products</div>
          <div className="videoshowcasemaster">
            <div className="videoshowcase">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/l1EssrLxt7E?list=PLfqMhTWNBTe3H6c9OGXb5_6wcc1Mca52n"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
            <div className="videoshowcase">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/l1EssrLxt7E?list=PLfqMhTWNBTe3H6c9OGXb5_6wcc1Mca52n"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
            <div className="videoshowcase">
              <iframe
                width="100%"
                height="300px"
                src="https://www.youtube.com/embed/l1EssrLxt7E?list=PLfqMhTWNBTe3H6c9OGXb5_6wcc1Mca52n"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="designimagecontainer">
        <img src={designimage} alt="designimage" />
      </div>
    </>
  );
};

export default Products


//make navbar fixed 
//add scroll display effect
//preloader