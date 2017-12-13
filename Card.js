// KLASA KANBAN CARD
function Card(id, name, content) {
	var self = this;
	
	this.id = id;
	this.name = name || 'No name given';
    this.content = content;
	this.element = createCard();

	function createCard() {
		var card = $('<li class="card"></li>');
		var cardDeleteBtn = $('<button class="btn-delete">x</button>');
		var cardDescription = $('<p class="card-description"></p>');
        var cardContent = $("<p class='content'></p>")
		
		cardDeleteBtn.click(function(){
			self.removeCard();
		});
		
		card.append(cardDeleteBtn);
		cardDescription.text(self.name);
		card.append(cardDescription)
        cardContent.text(self.content);
		card.append(cardContent);
		return card;
	}
}

Card.prototype = {
	removeCard: function() { 
        var self = this; 
        $.ajax({ 
            url: baseUrl + '/card/' + self.id, 
            method: 'DELETE', 
            success: function(){ 
                self.element.remove(); 
            } 
        }); 
    }
}
