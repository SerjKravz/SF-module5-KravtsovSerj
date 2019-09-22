const dataURL = "https://api.myjson.com/bins/jcmhn";

function handleButton() {
	$.getJSON(dataURL, handleData)
	document.querySelector("form").style.display = "none"
  // взять данные по dataUrl, вытащить их и передать в handleData
}

function handleData(data) {
	// const var1 = $("input[name=var1]") 
	let obj = {
	var1:document.querySelector('input[name=var1]').value,
	var2:document.querySelector('input[name=var2]').value,
	var3:document.querySelector('input[name=var3]').value,
	var4:document.querySelector('input[name=var4]').value,
	var5:document.querySelector('input[name=var5]').value,
	var6:document.querySelector('input[name=var6]').value,
	speach:document.querySelector('input[name=speach]').value,	
}

	let FinalMessage = ""
	data["text"].forEach(item=> {
		for (key in obj) {
			item = item.replace("{"+ key +"}", obj[key])
		}

		// item = item.replace("{var1}", var1)
		// item = item.replace("{var2}", var2)
		// item = item.replace("{var3}", var3)
		// item = item.replace("{var4}", var4)
		// item = item.replace("{var5}", var5)
		// item = item.replace("{var6}", var6)
		// item = item.replace("{speach}", speach)

		FinalMessage = FinalMessage + item + "<br>"
		document.querySelector("div#result").innerHTML = FinalMessage
		

	})
  // кажется, какой-то из этих способов сработает
  //const var1 = $("input[name=var1]")[0].value()
  //const var1 = $("input[name=var1]").value()
  //const var1 = $("input[name=var1]")[0].default()

  // надо сделать так чтобы сообщения подменились на значения из формы
 //  let text = "Здесь могла быть ваша реклама";
	// $("#result").text(text);
}

function init() {
	// $("#button-fetch").click(handleButton);
	document.querySelector("#button-fetch").addEventListener('click', handleButton)
}

$(document).ready(init);
