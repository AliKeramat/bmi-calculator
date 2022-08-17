const bmiCalculator = (document.getElementById("sub-btn").onclick =
  function calculator() {
    const weight = document.getElementById("wNumber").value;
    const height = document.getElementById("hNumber").value;
    const BMI = weight / height ** 2;
    document.getElementById("statusH2").innerHTML = "Your BMI is: " + BMI;
    const statusPara = document.getElementById("statusP");
    if (BMI < 18.5 && translate == true) {
      statusPara.innerHTML =
        "شما کم وزن هستید و این خوب نیست، بهتر است به متخصص تغذیه مراجعه کنید.";
        statusPara.style.color = "red"
    }
    if (BMI < 18.5 && translate == false) {
      statusPara.innerHTML =
        "You are underweight and that is not good. It is better to see a nutritionist";
        statusPara.style.color = "red"
    }
    if (BMI >= 18.5 && BMI <= 24.9 && translate == true) {
      statusPara.innerHTML =
        "وزن شما ایده آل است. جای نگرانی نیست! شما وزن مناسبی دارید.";
        statusPara.style.color = "green"
    }
    if (BMI >= 18.5 && BMI <= 24.9 && translate == false) {
      statusPara.innerHTML =
        "Your weight is ideal. No worries! You have a healthy weight.";
        statusPara.style.color = "green"
    }
    if (BMI > 24.9 && BMI <= 30 && translate == true) {
      statusPara.innerHTML =
        "«شما اضافه وزن دارید، بهتر است برای رسیدن به وزن ایده آل و پیشگیری از چاقی، از یک رژیم غذایی مناسب پیروی کنید و ورزش را در برنامه روزانه خود قرار دهید.";
        statusPara.style.color = "darkblue"
    }
    if (BMI > 24.9 && BMI <= 30 && translate == false) {
      statusPara.innerHTML =
        "You are overweight. It is better to follow a proper diet and include exercise in your daily schedule to reach the ideal weight and prevent obesity.";
        statusPara.style.color = "darkblue"
    }
    if (BMI > 30 && translate == true) {
      statusPara.innerHTML =
        "خبر بد! شما چاق هستید. اما نگران نباشید. با مراجعه به متخصص تغذیه و ورزش روزانه به وزن ایده آل خواهید رسید.";
    statusPara.style.color = "red"
      }
    if (BMI > 30 && translate == false) {
      statusPara.innerHTML =
        "bad news! you're fat. But don't worry. By visiting a nutritionist and exercising daily, you will reach the ideal weight.";
        statusPara.style.color = "red"
    }
  });
//   Translate

var translate = false;
console.log(translate);
const switchLan = (document.getElementById("lan-switch").onclick =
  function faLan() {
    document.getElementById("BMIC").innerHTML = "محاسبه گر بی ام ای"
    document.getElementById("enterH").innerHTML = "قد خود را وارد کنید";
    document.getElementById("enterW").innerHTML = "وزن خود را وارد کنید";
    document.getElementById("statusH2").innerHTML = "بی ام ای شما"
    document.getElementById("statusP").innerHTML = "وضعیت شما"
    document.getElementById("T1").innerHTML = "شاخص بی ام ای چیست ؟";
    document.getElementById("HIB").innerHTML =
      "شاخص توده بدنی وزن فرد بر حسب کیلوگرم تقسیم بر مجذور قد بر حسب متر است. این یک روش غربالگری ارزان و آسان برای دسته بندی وزن-کم وزنی، وزن سالم، اضافه وزن و چاقی است. که به طور مستقیم چربی بدن را اندازه گیری نمی کند، اما با اندازه گیری های مستقیم چربی بدن رابطه مستقیم دارد.";
    document.getElementById("T2").innerHTML = "بی ام ای چگونه استفاده می شود؟";
    document.getElementById("HIBU").innerHTML =
      "بی ام ای به یک ابزار غربالگری جهانی است ولی نمیتواند مشخص کننده وضعیت سلامتی فرد باشد. برای تایین وضعیت چاقی و سلامتی یک فرد غیر از این شاخص باید ارزیابی های بیشتری انجام شود. از جمله ضخامت چین های پوستی ، ارزیابی رژیم غذایی، فعالیت بدنی و سابقه خانوادگی.";
    document.getElementById("T3").innerHTML = "بی ام ای چگونه محاسبه میشود؟";
    document.getElementById("HIBC").innerHTML =
      "وزن شما بر حسب کیلوگرم ÷ قد شما بر حسب متر به توان 2";
    translate = true;
    console.log(translate);
  });
