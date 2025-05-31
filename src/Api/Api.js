

const GetSuggest = "https://passnov-backend.onrender.com/api/suggest/getsuggestion";

const UpdatePivot = "https://passnov-backend.onrender.com/api/suggest/updateUpvot";

const GetCategory = "https://passnov-backend.onrender.com/api/category/getcategories/683776214dd6c55059482240";

const GetImprovement = "https://passnov-backend.onrender.com/api/category/getcategories/683776354dd6c55059482244";

const GetFeature="https://passnov-backend.onrender.com/api/category/getcategories/683776294dd6c55059482242";

const CreateSuggest = "https://passnov-backend.onrender.com/api/suggest/register";



export async function getSuggestion() {
  try {
    const response = await fetch(GetSuggest);
    if (!response.ok) throw Error("Failed to fetch");

    return response.json();
  } catch (error) {
    console.log("Error occurred:", error);
  }
}

export async function UpdateVotes(id) {

    try {
        
        const response = await fetch(`${UpdatePivot}/${id}`, {
            method:'PUT',
            headers:{'content-type' : 'application/json'},
        
        });

        if(!response.ok) throw Error('failed to fetch');

        return await response.json();

    } catch (error) {
        console.log('error occured', error)
    }
    
}

export async function Getcategory() {

    try {
        const response = await fetch(GetCategory) ;

        if(!response.ok) throw Error('failed to fetch');

        return await response.json();

    } catch (error) {
        
        console.log('error occured', error);
    }
    
}


export async function GetImprovementCategory() {

    try {
        const response = await fetch(GetImprovement) ;

        if(!response.ok) throw Error('failed to fetch');

        return await response.json();

    } catch (error) {
        
        console.log('error occured', error);
    }
    
}

export async function GetFeatureCategory() {

    try {
        const response = await fetch(GetFeature) ;

        if(!response.ok) throw Error('failed to fetch');

        return await response.json();

    } catch (error) {
        
        console.log('error occured', error);
    }
    
}

export async function CreateSuggestion(data) {

    try {
        const response = await fetch(CreateSuggest , {
            method:'POST',
            headers:{'content-type' : 'application/json'},

            body:JSON.stringify(data)

        })

        if(!response.ok) throw Error('failed to send data');
        return await response.json();
    } catch (error) {
        
        console.log('error occured', error)
    }
    
}
