const inputs = document.querySelectorAll(".input");
const story  =document.getElementById("story") 

function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

let values={
	yourName:"none",
	number:"none",
	LeadName:"none",
	action:"none"
}

$(document).ready(function(){
	$(".tomthumb_box").hide();
	$(".story_box").hide();
	$("#storybtn").click(function(e){
		$(".story_box").show();
		$(".tomthumb_box").hide();
		$(".story").html("");
	})
	$("#tomthumb").click(function(e){
		$(".story_box").hide();
		$(".tomthumb_box").show();
		$(".story").html("");
	})
	$("#submit").click(function(e){
		e.preventDefault();
		if($("#name").val()){
			values.yourName= $("#name").val();
		}
		if($("#number").val()){
			
		values.number = $("#number").val();
		}
		if($("#leadname").val()){
		values.LeadName = $("#leadname").val();

		}
		if($("#action").val()){
			
		values.action = $("#action").val();
		}

		let stories = [
			{
				storyText: 	`<p class="storytext">People like me are called <span class="word">${values.yourName}</span>- marked by the goddess 
				of death Morana herself. Once upon a time, my <span class="word">${values.number}</span>  sisters and I had 
				our own way.Then people respected us and asked for mercy. They brought
				 us offerings and prayed to us. But 200 years ago, everything changed 
				 when the Prince of Serat <span class="word">${values.LeadName}</span> dared to raise his hand against one of us.
				 I tried to take revenge, but we all died. Now the rulers of Araken, 
				 mired in a long war with their neighbor Serat, have decided to bring 
				 me back to life. Give me a second chance for freedom and to <span class="word">${values.action}</span>.</p>`,
				link:"https://www.goodreads.com/book/show/58485905-mara-and-morok"
		},
		{
			storyText: 	`In a land without magic, where the king rules with an iron hand, <span class="word">${values.yourName}</span>, 
			an assassin, is summoned to the castle. She comes not to kill the king, but to <span class="word">${values.action}</span>. 
			If she defeats <span class="word">${values.number}</span> killers, thieves, and warriors in a competition, she is released from prison to serve as the king’s champion.
			The Crown Prince will provoke her. The Captain of the Guard ,<span class="word">${values.LeadName}</span> will protect her. But something evil dwells in the castle of glass—and it’s 
			there to kill. When her competitors start dying one by one, Celaena’s fight for freedom becomes a fight for survival, and a desperate quest
			 to root out the evil before it destroys her world.`,
				link:"https://www.goodreads.com/book/show/7896527-throne-of-glass"
		} ,
		{
			storyText: `<p><span class="word">${values.yourName}</span> was seven when her parents were murdered and she and her  <span class="word">${values.number}</span>sisters were stolen away to live in the
			 treacherous High Court of Faerie. 
			Ten years later, Jude wants nothing more than to  <span class="word">${values.action}</span>, despite her mortality. But many of the fey despise humans. 
			Especially Prince <span class="word">${values.LeadName}</span>, 
			the youngest and wickedest son of the High King.To win a place at the Court, she must defy him–and face the consequences.</p>`,
			link:"https://www.goodreads.com/book/show/26032825-the-cruel-prince?from_search=true&from_srp=true&qid=olIqfiK7yg&rank=1"
		}
		]
		let index = Math.floor(Math.random() * 3);
		$(".story").html(stories[index].storyText) 
		$(".story").append('<a href="'+stories[index].link+`">here the link to the story</a>`)
		
	})



	$("#fileSize").click(function(e){
		e.preventDefault();
		let colors = $("#colors").val();
		let bitdepth= Math.log(colors) / Math.log(2);	
		//bytes for color table  = #colors  x 3
		let bytesforcolortable = colors*3;
		let width = $("#width").val();
		let height = $("#height").val();
		//pixels in image = width x height.
		let pixelsinimage = width*height;
		//bytes for pixel color information  = #pixels x  bit-depth/8.
		let bfpci = pixelsinimage * bitdepth/8;
		//#bytes for image file = #bytes for color table +  #bytes for pixel color information.
		let bytesforimagefile = bytesforcolortable +bfpci;
		$(".story").html(bytesforimagefile+"KB") 
		
	})
})