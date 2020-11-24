
Survey
    .StylesManager
    .applyTheme("default");

var json = {
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "radiogroup",
        "name": "question1",
        "title": "How did you hear about us?",
        "choices": [
         {
          "value": "item1",
          "text": "Social Media"
         },
         {
          "value": "item2",
          "text": "Company Website"
         },
         {
          "value": "item3",
          "text": "Current Employ"
         }
        ],
        "hasOther": true,
        "otherText": "Other"
       },
       {
        "type": "comment",
        "name": "question3",
        "title": "What skills highlight you from others at your previous work?"
       }
      ]
     },
     {
      "name": "page2",
      "elements": [
       {
        "type": "text",
        "name": "question11",
        "title": "Are you willing to take overtime-shifts?(yes/no)"
       },
       {
        "type": "text",
        "name": "question2",
        "title": "How many years have you been working in a IT industry?"
       }
      ]
     },
     {
      "name": "page3",
      "elements": [
       {
        "type": "rating",
        "name": "question4",
        "title": "What level of knowledge do you consider, having in Fundamentals of programming knowledge?"
       },
       {
        "type": "comment",
        "name": "question5",
        "title": "What actually, motivated you to join our company for this position?"
       }
      ]
     },
     {
      "name": "page4",
      "elements": [
       {
        "type": "comment",
        "name": "question6",
        "title": "What makes you ambitious about the job role?"
       },
       {
        "type": "boolean",
        "name": "question7",
        "title": "Do you need any sponsorship from our company, in order to continue?"
       }
      ]
     },
     {
      "name": "page5",
      "elements": [
       {
        "type": "radiogroup",
        "name": "question8",
        "title": "Do you visualize the relation between your work and the goal of our company?",
        "choices": [
         {
          "value": "item1",
          "text": "Till some extent"
         },
         {
          "value": "item2",
          "text": "May be"
         },
         {
          "value": "item3",
          "text": "Yes surely."
         }
        ]
       },
       {
        "type": "comment",
        "name": "question9",
        "title": "What do you look in your ideal job?"
       }
      ]
     }
    ]
   };

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document.location = "singlethanks.html";
    });

$("#surveyElement").Survey({ model: survey });