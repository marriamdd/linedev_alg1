// შექმენით ფუნქცია სადაც პარამეტრები გვექნება მასივი და სტინგი.
// მასივში უნდა იყოს სტუდენტების სახელები, და სტინგში მხოლოდ ერთი სტუდენტის.
//  ფუნქციამ უნდა შეამოწმოს მასივში არის თუ არა ეს სტუდენტი და
// დააბრუნოს: სტუდენტი სწავლობს, თუ არ არის უნდა დააბრუნოს ასეთი სტუდენტი ვერ მოიძებნა

const students = ["guga", "khatia", "mari", "kety"];
function findStudent(arr, str) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == str) {
      return "სტუდენტი სწავლობს";
    }
  }
  return "ასეთი სტუდენტი ვერ მოიძებნა";
}
console.log(findStudent(students, "mari"));
