import React from "react";
import useProtectedPage from '../../hooks/useProtectedPage';

function CreateTripPage() {
    useProtectedPage()
    
    return(
        <div>criar viagem.</div>
    )
}

export default CreateTripPage;