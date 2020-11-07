const apiKey = "A9YYPjKvfpu_n0Uyd597LRkQGFNbwIT7BHl7sf1WoOjpBfp3SSWt-q3X1jhgXJK4Z_80NLzwpDSfYt3oBhH46p8gRI-HfzPClZaVAyjWj-tf5jl9CIbUiH1S85h7X3Yx";


const Yelp = {
    searchYelp(term,location,sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
            { headers: { Authorization: `Bearer ${apiKey}`}
        }).then((response) => {
            return response.json();
        }).then((jsonResponse) => {
            if(jsonResponse.businesses){
                return jsonResponse.businesses.map((business) => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count,
                    }
                });
            }
        })
    }
};


export default Yelp;

