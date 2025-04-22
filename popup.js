document.getElementById("translate-btn").addEventListener("click", async () => {
  const code = document.getElementById("input-code").value;
  const targetLang = document.getElementById("target-lang").value;

  const response = await fetch("https://your-api-url.com/translate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      code: code,
      target_lang: targetLang
    })
  });

  const result = await response.json();
  document.getElementById("output-code").textContent = result.translated_code;
});

