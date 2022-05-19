{
	"info": {
		"_postman_id": "0d9b0022-ac57-40c6-a570-551b3bf94b75",
		"name": "Postman. HW_2",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "20479524"
	},
	"item": [
		{
			"name": "first",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"// 1. Отправить запрос\r",
							"// 2. Статус код 200\r",
							"\r",
							"pm.test(\"Status code is 200\", function () {\r",
							"    pm.response.to.have.status(200);\r",
							"});\r",
							"\r",
							"// 3. Проверить, что в body приходит правильный string\r",
							"\r",
							"pm.test(\"Body is correct\", function () {\r",
							"    pm.response.to.have.body(\"This is the first responce from server!\");\r",
							"});"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://162.55.220.72:5005/first",
					"protocol": "http",
					"host": [
						"162",
						"55",
						"220",
						"72"
					],
					"port": "5005",
					"path": [
						"first"
					]
				}
			},
			"response": []
		},
		{
			"name": "user_info_3",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"// 1. Отправить запрос\r",
							"// 2. Статус код 200\r",
							"\r",
							"pm.test(\"Status code is 200\", function () {\r",
							"    pm.response.to.have.status(200);\r",
							"});\r",
							"\r",
							"// 3. Спарсить response body в json\r",
							"\r",
							"let responseData = pm.response.json();  \r",
							"console.log(responseData);\r",
							"\r",
							"// // 4. Проверить, что name в ответе равно name s request (name вбить руками.)\r",
							"\r",
							"pm.test(\"Your test name\", function() {\r",
							"    pm.expect(responseData.name).to.eql(\"Anastasia\");\r",
							"});\r",
							"\r",
							"\r",
							"// // 5. Проверить, что age в ответе равно age s request (age вбить руками.)\r",
							"\r",
							"pm.test(\"Your test age\", function () {\r",
							"pm.expect(responseData.age).to.eql(\"30\");\r",
							"});\r",
							"\r",
							"// // 6. Проверить, что salary в ответе равно salary s request (salary вбить руками.)\r",
							"\r",
							"pm.test(\"Your test salary\", function () {\r",
							"pm.expect(responseData.salary).to.eql(600);\r",
							"});\r",
							"\r",
							"// // 7. Спарсить request\r",
							"\r",
							"let requestData = request.data;  \r",
							"console.log('request data:', requestData);\r",
							"\r",
							"// // 8. Проверить, что name в ответе равно name s request (name забрать из request.)\r",
							"\r",
							"pm.test(\"The response name\", function () {\r",
							"pm.expect(responseData.name).to.eql(requestData.name);\r",
							"});\r",
							"\r",
							"// // 9. Проверить, что age в ответе равно age s request (age забрать из request.)\r",
							"\r",
							"pm.test(\"The response age\", function () {\r",
							"pm.expect(responseData.age).to.eql(requestData.age);\r",
							"});\r",
							"\r",
							"// // 10. Проверить, что salary в ответе равно salary s request (salary забрать из request.)\r",
							"\r",
							"pm.test(\"The response salary\", function () {\r",
							"pm.expect(responseData.salary).to.eql(Number(requestData.salary));\r",
							"});\r",
							"\r",
							"// // 11. Вывести в консоль параметр family из response.\r",
							"\r",
							"console.log('Family: ', responseData.family)\r",
							"\r",
							"// // 12. Проверить что u_salary_1_5_year в ответе равно salary*4 (salary забрать из request)\r",
							"\r",
							"pm.test(\"U_salary_1_5_year\", function(){\r",
							"    pm.expect(responseData.family.u_salary_1_5_year).to.eql(requestData.salary*4)\r",
							"});\r",
							"\r",
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "formdata",
					"formdata": [
						{
							"key": "name",
							"value": "Anastasia",
							"type": "text"
						},
						{
							"key": "age",
							"value": "30",
							"type": "text"
						},
						{
							"key": "salary",
							"value": "600",
							"type": "text"
						}
					]
				},
				"url": {
					"raw": "http://162.55.220.72:5005/user_info_3",
					"protocol": "http",
					"host": [
						"162",
						"55",
						"220",
						"72"
					],
					"port": "5005",
					"path": [
						"user_info_3"
					]
				}
			},
			"response": []
		},
		{
			"name": "object_info_3",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"// 1. Отправить запрос.\r",
							"// 2. Статус код 200\r",
							"\r",
							"pm.test(\"Status code is 200\", function () {\r",
							"    pm.response.to.have.status(200);\r",
							"});\r",
							"\r",
							"// 3. Спарсить response body в json.\r",
							"\r",
							"let responseData = pm.response.json();\r",
							"console.log('Response Data:', responseData)\r",
							"\r",
							"// 4. Спарсить request.\r",
							"\r",
							"let requestData = pm.request.url.query.toObject()  \r",
							"console.log('Request Data:', requestData);\r",
							"\r",
							"// 5. Проверить, что name в ответе равно name s request (name забрать из request.)\r",
							"\r",
							"pm.test(\"The response name\", function () {\r",
							"pm.expect(responseData.name).to.eql(requestData.name)\r",
							"});\r",
							"\r",
							"// 6. Проверить, что age в ответе равно age s request (age забрать из request.)\r",
							"\r",
							"pm.test(\"The response age\", function () {\r",
							"pm.expect(responseData.age).to.eql(requestData.age)\r",
							"});\r",
							"\r",
							"// 7. Проверить, что salary в ответе равно salary s request (salary забрать из request)\r",
							"\r",
							"pm.test(\"The response salary\", function () {\r",
							"pm.expect(responseData.salary).to.eql(Number(requestData.salary))\r",
							"});\r",
							"\r",
							"// 8. Вывести в консоль параметр family из response.\r",
							"\r",
							"console.log('Family: ', responseData.family)\r",
							"\r",
							"// 9. Проверить, что у параметра dog есть параметры name\r",
							"\r",
							"pm.test(\"The dog parameter has name\",function(){\r",
							"pm.expect(responseData.family.pets.dog).to.property('name');\r",
							"});\r",
							"\r",
							"// 10. Проверить, что у параметра dog есть параметры age.\r",
							"\r",
							"pm.test(\"The dog parameter has age\", function(){\r",
							"pm.expect(responseData.family.pets.dog).to.have.property('age');\r",
							"});\r",
							"\r",
							"// 11. Проверить, что параметр name имеет значение Luky.\r",
							"\r",
							"pm.test(\"The name parameter is equal Luky\", function(){\r",
							"pm.expect(responseData.family.pets.dog.name).to.eql('Luky');\r",
							"});\r",
							"\r",
							"// 12. Проверить, что параметр age имеет значение 4.\r",
							"\r",
							"pm.test(\"The age parameter is equal 4\", function(){\r",
							"pm.expect(responseData.family.pets.dog.age).to.eql(4);\r",
							"});"
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [],
				"body": {
					"mode": "formdata",
					"formdata": [
						{
							"key": "name",
							"value": "Anastasia",
							"type": "text"
						},
						{
							"key": "age",
							"value": "30",
							"type": "text"
						},
						{
							"key": "salary",
							"value": "600",
							"type": "text"
						}
					]
				},
				"url": {
					"raw": "http://162.55.220.72:5005/object_info_3?name=Anastasia&age=30&salary=600",
					"protocol": "http",
					"host": [
						"162",
						"55",
						"220",
						"72"
					],
					"port": "5005",
					"path": [
						"object_info_3"
					],
					"query": [
						{
							"key": "name",
							"value": "Anastasia"
						},
						{
							"key": "age",
							"value": "30"
						},
						{
							"key": "salary",
							"value": "600"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "object_info_4",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"// 1. Отправить запрос.\r",
							"// 2. Статус код 200\r",
							"\r",
							"pm.test(\"Status code is 200\", function () {\r",
							"    pm.response.to.have.status(200);\r",
							"});\r",
							"\r",
							"// 3. Спарсить response body в json.\r",
							"\r",
							"let responseData = pm.response.json();\r",
							"console.log ('Response Data', responseData)\r",
							"\r",
							"// 4. Спарсить request.\r",
							"\r",
							"let requestData = pm.request.url.query.toObject();\r",
							"console.log ('Request Data', requestData)\r",
							"\r",
							"// 5. Проверить, что name в ответе равно name s request (name забрать из request.)\r",
							"\r",
							"pm.test(\"The response name\", function () {\r",
							"pm.expect(responseData.name).to.eql(requestData.name)\r",
							"});\r",
							"\r",
							"// 6. Проверить, что age в ответе равно age из request (age забрать из request.)\r",
							"\r",
							"pm.test(\"The response age\", function () {\r",
							"pm.expect(responseData.age).to.eql(Number(requestData.age))\r",
							"});\r",
							"\r",
							"// 7. Вывести в консоль параметр salary из request.\r",
							"\r",
							"console.log(requestData.salary)\r",
							"\r",
							"// 8. Вывести в консоль параметр salary из response.\r",
							"\r",
							"console.log(responseData.salary)\r",
							"\r",
							"// 9. Вывести в консоль 0-й элемент параметра salary из response.\r",
							"\r",
							"console.log(responseData.salary[0])\r",
							"\r",
							"// 10. Вывести в консоль 1-й элемент параметра salary параметр salary из response\r",
							"\r",
							"console.log(responseData.salary[1])\r",
							"\r",
							"// 11. Вывести в консоль 2-й элемент параметра salary параметр salary из response.\r",
							"\r",
							"console.log(responseData.salary[2]);\r",
							"\r",
							"// 12. Проверить, что 0-й элемент параметра salary равен salary из request (salary забрать из request.)\r",
							"\r",
							"pm.test(\"The salary [0]\", function(){\r",
							"pm.expect(responseData.salary[0]).to.eql(Number(requestData.salary));\r",
							"});\r",
							"\r",
							"// 13. Проверить, что 1-й элемент параметра salary равен salary*2 из request (salary забрать из request.)\r",
							"\r",
							"pm.test(\"The salary[1]\", function(){\r",
							"pm.expect(Number(responseData.salary[1])).to.eql(requestData.salary*2);\r",
							"});\r",
							"\r",
							"// 14. Проверить, что 2-й элемент параметра salary равен salary*3 из request (salary забрать из request.)\r",
							"\r",
							"pm.test(\"The salary[2]\", function(){\r",
							"pm.expect(Number(responseData.salary[2])).to.eql(requestData.salary*3);\r",
							"});\r",
							"\r",
							"// 15. Создать в окружении переменную name\r",
							"// 16. Создать в окружении переменную age\r",
							"// 17. Создать в окружении переменную salary\r",
							"// 18. Передать в окружение переменную name\r",
							"\r",
							"pm.environment.set('name', responseData.name);\r",
							"\r",
							"// 19. Передать в окружение переменную age\r",
							"\r",
							"pm.environment.set('age', responseData.age);\r",
							"\r",
							"// 20. Передать в окружение переменную salary\r",
							"\r",
							"pm.environment.set('salary', responseData.salary[0]);\r",
							"\r",
							"// 21. Написать цикл который выведет в консоль по порядку элементы списка из параметра salary.\r",
							"\r",
							"for (let i of responseData.salary) {  \r",
							"console.log('элементы списка из параметра salary:',i);  \r",
							"}"
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [],
				"body": {
					"mode": "formdata",
					"formdata": [
						{
							"key": "name",
							"value": "Anastasia",
							"type": "text"
						},
						{
							"key": "age",
							"value": "30",
							"type": "text"
						},
						{
							"key": "salary",
							"value": "600",
							"type": "text"
						}
					]
				},
				"url": {
					"raw": "http://162.55.220.72:5005/object_info_4?name=Anastasia&age=30&salary=600",
					"protocol": "http",
					"host": [
						"162",
						"55",
						"220",
						"72"
					],
					"port": "5005",
					"path": [
						"object_info_4"
					],
					"query": [
						{
							"key": "name",
							"value": "Anastasia"
						},
						{
							"key": "age",
							"value": "30"
						},
						{
							"key": "salary",
							"value": "600"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "user_info_2",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"// 1. Вставить параметр salary из окружения в request\r",
							"// 2. Вставить параметр age из окружения в age\r",
							"// 3. Вставить параметр name из окружения в name\r",
							"// 4. Отправить запрос.\r",
							"// 5. Статус код 200\r",
							"\r",
							"pm.test(\"Status code is 200\", function () {\r",
							"    pm.response.to.have.status(200);\r",
							"});\r",
							"\r",
							"// 6. Спарсить response body в json.\r",
							"\r",
							"let responseData = pm.response.json();  \r",
							"console.log(responseData);\r",
							"\r",
							"// 7. Спарсить request\r",
							"\r",
							"let requestData = request.data;  \r",
							"console.log('request data:', requestData);\r",
							"\r",
							"// 8. Проверить, что json response имеет параметр start_qa_salary\r",
							"\r",
							"pm.test(\"start_qa_salary\", function(){\r",
							"pm.expect(responseData).to.have.property('start_qa_salary');\r",
							"});\r",
							"\r",
							"// 9. Проверить, что json response имеет параметр qa_salary_after_6_months\r",
							"\r",
							"pm.test(\"qa_salary_after_6_months\", function(){\r",
							"pm.expect(responseData).to.have.property('qa_salary_after_6_months');\r",
							"});\r",
							"\r",
							"// 10. Проверить, что json response имеет параметр qa_salary_after_12_months\r",
							"\r",
							"pm.test(\"qa_salary_after_12_months\", function(){\r",
							"pm.expect(responseData).to.have.property('qa_salary_after_12_months');\r",
							"});\r",
							"\r",
							"// 11. Проверить, что json response имеет параметр qa_salary_after_1.5_year\r",
							"\r",
							"pm.test(\"qa_salary_after_1.5_year\", function(){\r",
							"pm.expect(responseData).to.have.property('qa_salary_after_1.5_year');\r",
							"});\r",
							"\r",
							"// 12. Проверить, что json response имеет параметр qa_salary_after_3.5_years\r",
							"\r",
							"pm.test(\"qa_salary_after_3.5_years\", function(){\r",
							"pm.expect(responseData).to.have.property('qa_salary_after_3.5_years');\r",
							"});\r",
							"\r",
							"// 13. Проверить, что json response имеет параметр person\r",
							"\r",
							"pm.test(\"person\", function(){\r",
							"pm.expect(responseData).to.have.property('person');\r",
							"});\r",
							"\r",
							"// 14. Проверить, что параметр start_qa_salary равен salary из request (salary забрать из request.)\r",
							"\r",
							"pm.test(\"salary из request\", function () {\r",
							"pm.expect(responseData.start_qa_salary).to.eql(Number(requestData.salary))\r",
							"});\r",
							"\r",
							"// 15. Проверить, что параметр qa_salary_after_6_months равен salary*2 из request (salary забрать из request.)\r",
							"\r",
							"pm.test(\"salary*2 из request\", function () {\r",
							"pm.expect(responseData.qa_salary_after_6_months).to.eql(Number(requestData.salary*2))\r",
							"});\r",
							"\r",
							"// 16. Проверить, что параметр qa_salary_after_12_months равен salary*2.7 из request (salary забрать из request.)\r",
							"\r",
							"pm.test(\"salary*2.7 из request\", function () {\r",
							"pm.expect(responseData.qa_salary_after_12_months).to.eql(Number(requestData.salary*2.7))\r",
							"});\r",
							"\r",
							"// 17. Проверить, что параметр qa_salary_after_1.5_year равен salary*3.3 из request (salary забрать из request.)\r",
							"\r",
							"pm.test(\"salary*3.3 из request\", function () {\r",
							"pm.expect(responseData['qa_salary_after_1.5_year']).to.eql(Number(requestData.salary*3.3))\r",
							"});\r",
							"\r",
							"// 18. Проверить, что параметр qa_salary_after_3.5_years равен salary*3.8 из request (salary забрать из request.)\r",
							"\r",
							"pm.test(\"salary*3.8 из request\", function () {\r",
							"pm.expect(responseData['qa_salary_after_3.5_years']).to.eql(Number(requestData.salary*3.8))\r",
							"});\r",
							"\r",
							"// 19. Проверить, что в параметре person, 1-й элемент из u_name равен salary из request (salary забрать из request.)\r",
							"\r",
							"pm.test(\"The u_name[1]\", function(){\r",
							"pm.expect(responseData.person.u_name[1]).to.eql(Number(requestData.salary));\r",
							"});\r",
							"\r",
							"// 20. Проверить, что параметр u_age равен age из request (age забрать из request.)\r",
							"\r",
							"pm.test(\"age из request\", function () {\r",
							"    pm.expect(responseData.person.u_age).to.eql(Number(requestData.age))\r",
							"});\r",
							"\r",
							"// 21. Проверить, что параметр u_salary_5_years равен salary*4.2 из request (salary забрать из request.)\r",
							"\r",
							"pm.test(\"salary*4.2 из request\", function () {\r",
							"    pm.expect(responseData.person.u_salary_5_years).to.eql(requestData.salary*4.2)\r",
							"});\r",
							"\r",
							"// 22. ***Написать цикл который выведет в консоль по порядку элементы списка из параметра person.\r",
							"\r",
							"for(let key in responseData.person) {\r",
							"   if(typeof(responseData.person[key]) == 'object'){\r",
							"       for(let i = 0; i < Object.keys(responseData.person[key]).length; i++){\r",
							"           console.log(responseData.person[key][i]);\r",
							"       }\r",
							"   }\r",
							"   else if(typeof(responseData.person[key]) != 'object') {\r",
							"        console.log(responseData.person[key]);\r",
							"   }\r",
							"}"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "formdata",
					"formdata": [
						{
							"key": "name",
							"value": "{{name}}",
							"type": "text"
						},
						{
							"key": "age",
							"value": "{{age}}",
							"type": "text"
						},
						{
							"key": "salary",
							"value": "{{salary}}",
							"type": "text"
						}
					]
				},
				"url": {
					"raw": "http://162.55.220.72:5005/user_info_2",
					"protocol": "http",
					"host": [
						"162",
						"55",
						"220",
						"72"
					],
					"port": "5005",
					"path": [
						"user_info_2"
					]
				}
			},
			"response": []
		}
	]
}