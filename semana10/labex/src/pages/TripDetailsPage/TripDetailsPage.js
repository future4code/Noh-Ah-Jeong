import React from "react";
import useProtectedPage from '../../hooks/useProtectedPage';

function TripDetailsPage() {
    useProtectedPage()
    
    return(
        <div>Página detalhes.</div>
    )
}

export default TripDetailsPage;