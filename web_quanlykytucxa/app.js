document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const studentId = document.getElementById('student-id').value;
    const password = document.getElementById('password').value;
  
    // Kiểm tra tài khoản và mật khẩu
    if (studentId === 'student1' && password === '123456') {
      alert('Đăng nhập thành công!');
      // Chuyển hướng sang trang chính sau khi đăng nhập thành công
      window.location.href = 'dashboard.html';
    } else {
      alert('Mã số sinh viên hoặc mật khẩu không đúng!');
    }
  });
  