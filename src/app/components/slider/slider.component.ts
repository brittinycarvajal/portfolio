import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.scss"]
})
export class SliderComponent implements OnInit {
  data = [
    {
      name: "Jared Ramirez",
      text:
        "Brittiny has a great work ethic; and as a manager, it gave me confidence that when I am busy with other things, I had full certainty that she was going above and beyond what we asked her to do. This is a big deal as I don’t feel like I needed to constantly check up on her to make sure the job is getting done. It ultimately left me more time for other important tasks. She is a hard worker so the benefit there was saving me time, unlike the experience I have with some of the other employees I manage. Other benefits are that she is self-motivated, willing to learn new things, and always prepared with reports and data to back it up. I don’t have time, nor do I want to micromanage everyone on my team, I need employees like Brittiny that get there work done every day at a high level. Her department is the most efficient in our company and we constantly use them as an example of how we want other departments to run.",
      title: "Coach Team Lead"
    },
    {
      name: "Noelia Zambrana",
      text:
        "Working with Brittiny helped me achieve more efficient communication with the department. Some benefits of working together was established a unified team, department improved in efficiency, and you brought a diversity of thought which led to problem-solving issues within the department. I liked working with her because she has always been dedicated to her work and combined with her personality, it made working with her such an ease.",
      title: "Transfer Team Lead: HR"
    },
    {
      name: "Karla Trejo",
      text:
        "Working with Brittiny is a true pleasure. She's compassionate, hardworking, knowledgeable, and those are just some of the qualities that she posses. It is easy enough for one to pick up on and implement into their own life. A few benefits of working together were feeding off each others knowledge, working as a team in order for everyone to achieve both our given tasks, she creates a fun working environment, and she gives the best advice! Work-related, and personal. Anyone who works with Brittiny is not only fortunate, but experiences a wonderful work colleague, friend, and mentor. She posses such great qualities. It is amazing how she is selfless enough to share with anyone who, not only sits with her but also works with her! Brittiny is someone who is a team player, that you can rely on if you need assistance or to get the job done. She's someone who will go above and beyond to make sure the task is finished to the standard you want. She is someone that you personally will have as a lifelong friend. She’s someone that's really easy going, and you enjoy working with. I will miss her a lot! But I know I gained a good friend.",
      title: "Client Success Advocate"
    },
    {
      name: "Joe Brinkerhoff",
      text:
        "I would recommend Brittiny to work for anybody.  She is a smart hard working person, who sees all of her assignments and duties through to the end with professionalism.  She is always on time and very thorough with all of her work.  She has a very good personality and will work well with anybody.  She fits into any situation and is just a joy to be around.",
      title: "Accountant Team Lead"
    },
    {
      name: "Hannah Rogers",
      text:
        "Brittiny helped our team become the best in the company. A few benefits of working with her include making a strong team, figuring out more effective processes, and she always had creative ideas on how to make things better. I recommend working with Brittiny. She works really well with others and is a quick learner. I had other people doing the job before Brittiny and they struggled to complete the job, but Brittiny learned quickly and was efficient with her work. She is self-motivated and I never had to worry that things were not being done. I felt that I could trust her with whatever projects we had.",
      title: "Transfer Team"
    },
    {
      name: "Beverly Jones",
      text:
        "Brittiny made it easy to acquire necessary information required to help clients, relaying it to the proper channels.  She understands the process and the requirements of the information requested which made my job easier as we work together.  She is a great asset to have. Communication with Brittiny is very easy. Brittiny is eager to learn while applying training which makes the whole team work more effectively.  She is also a good example to others in the workplace. Brittiny is smart with her interactions saving time and energy with the team and our clients. Brittiny is professional and friendly in the workspace environment which makes coming to work an enjoyable place to be. Brittiny does not talk good or bad about others creating a neutral workplace.  This makes me feel at ease working with her. I would recommend working with Brittiny to any company looking for a great asset to add to their team.  She is smart, kind, efficient, punctual, and thoughtful of others.  She learns very quickly and applies her training effectively.  She offers to help when needed.  She is good with the computer in all communication and with IT.  She meets deadlines under pressure with work that requires attention to detail effectively and efficiently.  She consistently gets the job done with a good and cheerful attitude.  ",
      title: "Connecticut Specialist: Ohio Specialist: Coach"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
