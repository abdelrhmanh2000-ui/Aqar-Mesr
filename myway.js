    // جافاسكربت لإظهار الزر وإخفاؤه والتحكم في الضغط
    const btn = document.getElementById('toTop');

    // إظهار الزر بعد النزول 300px
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        btn.classList.add('show');
      } else {
        btn.classList.remove('show');
      }
    });

    // عند الضغط، العودة للأعلى واختفاء الزر
    btn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      btn.classList.remove('show');
    });