function validateCustomOrder() {
    var name = document.getElementById("clientName").value;
    var password = document.getElementById("accountPass").value;
    var craft = document.getElementById("craftType").value;
    var details = document.getElementById("orderDetails").value;

    // جملة الشرط للتأكد من أن الحقول ليست فارغة
    if (name === "" || password === "" || craft === "" || details === "") {
        window.alert("عذراً، يرجى تعبئة جميع الحقول قبل إرسال الطلب المخصص!");
        return false; // يمنع الإرسال ويظهر التنبيه
    } else {
        window.alert("تم إرسال طلبك المخصص بنجاح، شكراً لانضمامك لمتجرنا!");
        return true; // يسمح بالإرسال
    }
}