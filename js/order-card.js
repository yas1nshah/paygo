function updateCardImage(selectedCardType) {
    var imgElement = document.getElementById("card_image");
  
    // Update the image source based on the selected card type
    switch (selectedCardType) {
      case "bronze":
        imgElement.src = "assets/images/card-bronze.png";
        break;
      case "silver":
        imgElement.src = "assets/images/card-silver.png";
        break;
      case "gold":
        imgElement.src = "assets/images/card-gold.png";
        break;
      default:
        // Set a default image or handle other cases
        imgElement.src = "assets/images/card-bronze.png";
        break;
    }
  }