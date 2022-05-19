# Postman
This repository contains my Postman practice.

HW_2 Postman

http://162.55.220.72:5005/first

1. Отправить запрос
2. Статус код 200

`pm.test("Status code is 200", function () {

pm.response.to.have.status(200);

});`

3. Проверить, что в body приходит правильный string

`pm.test("Body is correct", function () {

pm.response.to.have.body("This is the first responce from server!");

});`

http://162.55.220.72:5005/user_info_3
1. Отправить запрос
2. Статус код 200

`pm.test("Status code is 200", function () {

pm.response.to.have.status(200);

});`

3. Спарсить response body в json

`let responseData = pm.response.json();

console.log(responseData);`

4. Проверить, что name в ответе равно name s request (name вбить руками.)

`pm.test("Your test name", function() {

pm.expect(responseData.name).to.eql("Anastasia");
    
});`


5. Проверить, что age в ответе равно age s request (age вбить руками.)

`pm.test("Your test age", function () {

pm.expect(responseData.age).to.eql("30");

});`

6. Проверить, что salary в ответе равно salary s request (salary вбить руками.)

`pm.test("Your test salary", function () {

pm.expect(responseData.salary).to.eql(600);

});`

7. Спарсить request

`let requestData = request.data;

console.log('request data:', requestData);`

8. Проверить, что name в ответе равно name s request (name забрать из request.)

`pm.test("The response name", function () {

pm.expect(responseData.name).to.eql(requestData.name);

});`

9. Проверить, что age в ответе равно age s request (age забрать из request.)

`pm.test("The response age", function () {

pm.expect(responseData.age).to.eql(requestData.age);

});`

10. Проверить, что salary в ответе равно salary s request (salary забрать из request.)

`pm.test("The response salary", function () {

pm.expect(responseData.salary).to.eql(Number(requestData.salary));

});`

11. Вывести в консоль параметр family из response.

`console.log('Family: ', responseData.family)`

12. Проверить что u_salary_1_5_year в ответе равно salary*4 (salary забрать из request)

`pm.test("U_salary_1_5_year", function(){

pm.expect(responseData.family.u_salary_1_5_year).to.eql(requestData.salary*4)

});`

http://162.55.220.72:5005/object_info_3
1. Отправить запрос.
2. Статус код 200

`pm.test("Status code is 200", function () {

pm.response.to.have.status(200);
    
});`

3. Спарсить response body в json.

`let responseData = pm.response.json();

console.log('Response Data:', responseData)`

4. Спарсить request.

`let requestData = pm.request.url.query.toObject()

console.log('Request Data:', requestData);`

5. Проверить, что name в ответе равно name s request (name забрать из request.)

`pm.test("The response name", function () {
pm.expect(responseData.name).to.eql(requestData.name)
});`

6. Проверить, что age в ответе равно age s request (age забрать из request.)

`pm.test("The response age", function () {

pm.expect(responseData.age).to.eql(requestData.age)

});`

7. Проверить, что salary в ответе равно salary s request (salary забрать из request)

`pm.test("The response salary", function () {

pm.expect(responseData.salary).to.eql(Number(requestData.salary))

});`

8. Вывести в консоль параметр family из response.

`console.log('Family: ', responseData.family)`

9. Проверить, что у параметра dog есть параметры name

`pm.test("The dog parameter has name",function(){

pm.expect(responseData.family.pets.dog).to.property('name');

});`

10. Проверить, что у параметра dog есть параметры age.

`pm.test("The dog parameter has age", function(){

pm.expect(responseData.family.pets.dog).to.have.property('age');

});`

11. Проверить, что параметр name имеет значение Luky.

`pm.test("The name parameter is equal Luky", function(){

pm.expect(responseData.family.pets.dog.name).to.eql('Luky');

});`

12. Проверить, что параметр age имеет значение 4.

`pm.test("The age parameter is equal 4", function(){

pm.expect(responseData.family.pets.dog.age).to.eql(4);

});`

http://162.55.220.72:5005/object_info_4
1. Отправить запрос.
2. Статус код 200

`pm.test("Status code is 200", function () {

pm.response.to.have.status(200);
    
});`

3. Спарсить response body в json.

`let responseData = pm.response.json();

console.log ('Response Data', responseData)`

4. Спарсить request.

`let requestData = pm.request.url.query.toObject();

console.log ('Request Data', requestData)`

5. Проверить, что name в ответе равно name s request (name забрать из request.)

`pm.test("The response name", function () {

pm.expect(responseData.name).to.eql(requestData.name)

});`

6. Проверить, что age в ответе равно age из request (age забрать из request.)

`pm.test("The response age", function () {

pm.expect(responseData.age).to.eql(Number(requestData.age))

});`

7. Вывести в консоль параметр salary из request.

`console.log(requestData.salary)`

8. Вывести в консоль параметр salary из response.

`console.log(responseData.salary)`

9. Вывести в консоль 0-й элемент параметра salary из response.

`console.log(responseData.salary[0])`

10. Вывести в консоль 1-й элемент параметра salary параметр salary из response

`console.log(responseData.salary[1])`

11. Вывести в консоль 2-й элемент параметра salary параметр salary из response.

`console.log(responseData.salary[2])`

12. Проверить, что 0-й элемент параметра salary равен salary из request (salary забрать из request.)

`pm.test("The salary [0]", function(){

pm.expect(responseData.salary[0]).to.eql(Number(requestData.salary));

});`

13. Проверить, что 1-й элемент параметра salary равен salary*2 из request (salary забрать из request.)

`pm.test("The salary[1]", function(){

pm.expect(Number(responseData.salary[1])).to.eql(requestData.salary*2);

});`

14. Проверить, что 2-й элемент параметра salary равен salary*3 из request (salary забрать из request.)

`pm.test("The salary[2]", function(){

pm.expect(Number(responseData.salary[2])).to.eql(requestData.salary*3);

});`

15. Создать в окружении переменную name
16. Создать в окружении переменную age
17. Создать в окружении переменную salary
18. Передать в окружение переменную name

`pm.environment.set('name', responseData.name);`

19. Передать в окружение переменную age

`pm.environment.set('age', responseData.age);`

20. Передать в окружение переменную salary

`pm.environment.set('salary', responseData.salary[0]);`

21. Написать цикл который выведет в консоль по порядку элементы списка из параметра salary.

`for (let i of responseData.salary) {  

console.log('элементы списка из параметра salary:',i);

}`

http://162.55.220.72:5005/user_info_2
1. Вставить параметр salary из окружения в request
2. Вставить параметр age из окружения в age
3. Вставить параметр name из окружения в name
4. Отправить запрос.
5. Статус код 200

`pm.test("Status code is 200", function () {

pm.response.to.have.status(200);

});`

6. Спарсить response body в json.

`let responseData = pm.response.json();

console.log(responseData);`

7. Спарсить request

`let requestData = request.data;

console.log('request data:', requestData);`

8. Проверить, что json response имеет параметр start_qa_salary

`pm.test("start_qa_salary", function(){

pm.expect(responseData).to.have.property('start_qa_salary');

});`

9. Проверить, что json response имеет параметр qa_salary_after_6_months

`pm.test("qa_salary_after_6_months", function(){

pm.expect(responseData).to.have.property('qa_salary_after_6_months');

});`

10. Проверить, что json response имеет параметр qa_salary_after_12_months

`pm.test("qa_salary_after_12_months", function(){

pm.expect(responseData).to.have.property('qa_salary_after_12_months');

});`

11. Проверить, что json response имеет параметр qa_salary_after_1.5_year

`pm.test("qa_salary_after_1.5_year", function(){

pm.expect(responseData).to.have.property('qa_salary_after_1.5_year');

});`

12. Проверить, что json response имеет параметр qa_salary_after_3.5_years

`pm.test("qa_salary_after_3.5_years", function(){

pm.expect(responseData).to.have.property('qa_salary_after_3.5_years');

});`

13. Проверить, что json response имеет параметр person

`pm.test("person", function(){

pm.expect(responseData).to.have.property('person');

});`

14. Проверить, что параметр start_qa_salary равен salary из request (salary забрать из request.)

`pm.test("salary из request", function () {

pm.expect(responseData.start_qa_salary).to.eql(Number(requestData.salary))

});`

15. Проверить, что параметр qa_salary_after_6_months равен salary*2 из request (salary забрать из request.)

`pm.test("salary*2 из request", function () {

pm.expect(responseData.qa_salary_after_6_months).to.eql(Number(requestData.salary*2))

});`

16. Проверить, что параметр qa_salary_after_12_months равен salary*2.7 из request (salary забрать из request.)

`pm.test("salary*2.7 из request", function () {

pm.expect(responseData.qa_salary_after_12_months).to.eql(Number(requestData.salary*2.7))

});`

17. Проверить, что параметр qa_salary_after_1.5_year равен salary*3.3 из request (salary забрать из request.)

`pm.test("salary*3.3 из request", function () {

pm.expect(responseData['qa_salary_after_1.5_year']).to.eql(Number(requestData.salary*3.3))

});`

18. Проверить, что параметр qa_salary_after_3.5_years равен salary*3.8 из request (salary забрать из request.)

`pm.test("salary*3.8 из request", function () {

pm.expect(responseData['qa_salary_after_3.5_years']).to.eql(Number(requestData.salary*3.8))

});`

19. Проверить, что в параметре person, 1-й элемент из u_name равен salary из request (salary забрать из request.)

`pm.test("The u_name[1]", function(){

pm.expect(responseData.person.u_name[1]).to.eql(Number(requestData.salary));

});`

20. Проверить, что параметр u_age равен age из request (age забрать из request.)

`pm.test("age из request", function () {

pm.expect(responseData.person.u_age).to.eql(Number(requestData.age))

});`

21. Проверить, что параметр u_salary_5_years равен salary*4.2 из request (salary забрать из request.)

`pm.test("salary*4.2 из request", function () {

pm.expect(responseData.person.u_salary_5_years).to.eql(requestData.salary*4.2)
    
});`

22. ***Написать цикл который выведет в консоль по порядку элементы списка из параметра person.

`for(let key in responseData.person) {

   if(typeof(responseData.person[key]) == 'object'){
   
       for(let i = 0; i < Object.keys(responseData.person[key]).length; i++){
       
           console.log(responseData.person[key][i]);
           
       }
       
   }
   
   else if(typeof(responseData.person[key]) != 'object') {
   
        console.log(responseData.person[key]);
        
   }
   
}`
