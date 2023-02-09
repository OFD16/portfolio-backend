/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('user').del()
  await knex('user').insert([
    {
      first_name: "Ömer Faruk",
      last_name: "Demirsoy",
      age: 23,
      role: "admin",
      email: "omerdmrsy@gmail.com",
      user_image: "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
      social_links: {
        linkedn: "https://www.linkedin.com/in/%C3%B6mer-faruk-demirsoy-290642196/",
        behance: "https://www.behance.net/betul-0zkan",
        medium: "https://medium.com/@betul-0zkan",
        instagram: "",
        github: "https://github.com/OFD16",
      },
      introduction: "I am a 20-year-old, self-taught freelance UI/UX designer based in Turkey. My passion is to using design to inspire and impact others, so I make it a point to constantly improve my skills and write my learnings in both English and Turkish.",
      description: "Lorem ipsum dolor sit amet consectetur. In volutpat sed quis tortor magna libero mi. At aliquam nec consectetur sem eget nunc aliquam. In adipiscing sit tristique nunc sodales. Id nisi libero massa mi senectus quis. Erat varius tortor lobortis et nunc laoreet cras. Lorem ipsum dolor sit amet consectetur. In volutpat sed quis tortor magna libero mi. At aliquam nec consectetur sem eget nunc aliquam. In adipiscing sit tristique nunc sodales. Id nisi libero massa mi senectus quis. Erat varius tortor lobortis et nunc laoreet cras. Lorem ipsum dolor sit amet consectetur. In volutpat sed quis tortor magna libero mi. At aliquam nec consectetur sem eget nunc aliquam. In adipiscing sit tristique nunc sodales. Id nisi libero massa mi senectus quis. Erat varius tortor lobortis et nunc laoreet cras. ",
      medias: {
        videos: ["https://www.youtube.com/watch?v=lSIWNfNzJ18", "https://www.youtube.com/watch?v=G1GgjXbc6VM"],
        images: ["https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"],
      },
      marked_projects: [2, 7],
      marked_blogs: [],
      experiences: [
        { started_time: "01/01/2023", finished_time: "01/03/2023", company_name: "Figma", job_name: "UI/UX designer", introduction: "I am a 20-year-old, self-taught freelance UI/UX designer based in Turkey. My passion is to using design to inspire and impact others, so I make it a point to constantly improve my skills and write my learnings in both English and Turkish.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1000px-Instagram_logo_2022.svg.png" },
        { started_time: "01/01/2023", finished_time: "", company_name: "google", job_name: "coder", introduction: "I am a 20-year-old, self-taught freelance UI/UX designer based in Turkey. My passion is to using design to inspire and impact others, so I make it a point to constantly improve my skills and write my learnings in both English and Turkish.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1000px-Instagram_logo_2022.svg.png" }
      ],
      education: [
        { started_time: "01/01/2015", finished_time: "01/03/2020", school_name: "EAİHL", degree: "Lise", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1000px-Instagram_logo_2022.svg.png" },
        { started_time: "01/01/2020", finished_time: "01/03/2026", school_name: "AGÜ", degree: "lisans", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1000px-Instagram_logo_2022.svg.png" },
      ],
      skills: [
        { skill_name: "java", experience_time: "6 ay", description: "Lorem ipsum dolor sit amet consectetur. In volutpat sed quis tortor magna libero mi. At aliquam nec consectetur sem eget nunc aliquam. In adipiscing sit tristique nunc sodales.", image: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png" },
        { skill_name: "c++", experience_time: "1 ay", description: "Lorem ipsum dolor sit amet consectetur. In volutpat sed quis tortor magna libero mi. At aliquam nec consectetur sem eget nunc aliquam. In adipiscing sit tristique nunc sodales.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png" },
      ],
      role: 'admin',
      sign_mail: "omer@gmail.com",
      password: "123456"
    },
  ]);

  // await knex('project').del()
  // await knex('project').insert([
  //   {
  //     id: 1,
  //     user_id: 0,
  //     project_name: "proje adı",
  //     project_type: "proje tipi",
  //     project_title: "proje başlıpı",
  //     intro_image: "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
  //     project_intro: "I am a 20-year-old, self-taught freelance UI/UX designer based in Turkey. My passion is to using design to inspire and impact others, so I make it a point to constantly improve my skills and write my learnings in both English and Turkish.",
  //     paragraphs: [
  //       {
  //         first_video: "",
  //         first_image: "",
  //         left_image: "",
  //         paragpaph: "Lorem ipsum dolor sit amet consectetur. In volutpat sed quis tortor magna libero mi. At aliquam nec consectetur sem eget nunc aliquam. In adipiscing sit tristique nunc sodales. Id nisi libero massa mi senectus quis. Erat varius tortor lobortis et nunc laoreet cras. Lorem ipsum dolor sit amet consectetur. In volutpat sed quis tortor magna libero mi. At aliquam nec consectetur sem eget nunc aliquam. In adipiscing sit tristique nunc sodales. Id nisi libero massa mi senectus quis. Erat varius tortor lobortis et nunc laoreet cras. Lorem ipsum dolor sit amet consectetur. In volutpat sed quis tortor magna libero mi. At aliquam nec consectetur sem eget nunc aliquam. In adipiscing sit tristique nunc sodales. Id nisi libero massa mi senectus quis. Erat varius tortor lobortis et nunc laoreet cras. ",
  //         right_image: "",
  //         last_image: "",
  //         last_video: "",
  //       },
  //       {
  //         first_video: "",
  //         first_image: "",
  //         left_image: "",
  //         paragpaph: "Lorem ipsum dolor sit amet consectetur. In volutpat sed quis tortor magna libero mi. At aliquam nec consectetur sem eget nunc aliquam. In adipiscing sit tristique nunc sodales. Id nisi libero massa mi senectus quis. Erat varius tortor lobortis et nunc laoreet cras. Lorem ipsum dolor sit amet consectetur. In volutpat sed quis tortor magna libero mi. At aliquam nec consectetur sem eget nunc aliquam. In adipiscing sit tristique nunc sodales. Id nisi libero massa mi senectus quis. Erat varius tortor lobortis et nunc laoreet cras. Lorem ipsum dolor sit amet consectetur. In volutpat sed quis tortor magna libero mi. At aliquam nec consectetur sem eget nunc aliquam. In adipiscing sit tristique nunc sodales. Id nisi libero massa mi senectus quis. Erat varius tortor lobortis et nunc laoreet cras. ",
  //         right_image: "",
  //         last_image: "",
  //         last_video: "",
  //       }
  //     ],
  //     medias: {
  //       videos: ["https://www.youtube.com/watch?v=lSIWNfNzJ18", "https://www.youtube.com/watch?v=G1GgjXbc6VM"],
  //       images: ["https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"],
  //     },
  //     members: ["ali", "ayşe"],
  //     links: ["https://www.twitch.tv/", "https://www.twitch.tv/elraenn"]
  //   },
  // ]);

  // await knex('post').del()
  // await knex('post').insert([
  //   {
  //     id: 1,
  //     user_id: 0,
  //     post_name: "post adı 1",
  //     post_type: "post tipi 1",
  //     post_title: "post başlıpı 1",
  //     intro_image: "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
  //     post_intro: "1 I am a 20-year-old, self-taught freelance UI/UX designer based in Turkey. My passion is to using design to inspire and impact others, so I make it a point to constantly improve my skills and write my learnings in both English and Turkish.",
  //     paragraphs: [
  //       {
  //         first_video: "",
  //         first_image: "",
  //         left_image: "",
  //         paragpaph: "1 Lorem ipsum dolor sit amet consectetur. In volutpat sed quis tortor magna libero mi. At aliquam nec consectetur sem eget nunc aliquam. In adipiscing sit tristique nunc sodales. Id nisi libero massa mi senectus quis. Erat varius tortor lobortis et nunc laoreet cras. Lorem ipsum dolor sit amet consectetur. In volutpat sed quis tortor magna libero mi. At aliquam nec consectetur sem eget nunc aliquam. In adipiscing sit tristique nunc sodales. Id nisi libero massa mi senectus quis. Erat varius tortor lobortis et nunc laoreet cras. Lorem ipsum dolor sit amet consectetur. In volutpat sed quis tortor magna libero mi. At aliquam nec consectetur sem eget nunc aliquam. In adipiscing sit tristique nunc sodales. Id nisi libero massa mi senectus quis. Erat varius tortor lobortis et nunc laoreet cras. ",
  //         right_image: "",
  //         last_image: "",
  //         last_video: "",
  //       },
  //       {
  //         first_video: "",
  //         first_image: "",
  //         left_image: "",
  //         paragpaph: "1 Lorem ipsum dolor sit amet consectetur. In volutpat sed quis tortor magna libero mi. At aliquam nec consectetur sem eget nunc aliquam. In adipiscing sit tristique nunc sodales. Id nisi libero massa mi senectus quis. Erat varius tortor lobortis et nunc laoreet cras. Lorem ipsum dolor sit amet consectetur. In volutpat sed quis tortor magna libero mi. At aliquam nec consectetur sem eget nunc aliquam. In adipiscing sit tristique nunc sodales. Id nisi libero massa mi senectus quis. Erat varius tortor lobortis et nunc laoreet cras. Lorem ipsum dolor sit amet consectetur. In volutpat sed quis tortor magna libero mi. At aliquam nec consectetur sem eget nunc aliquam. In adipiscing sit tristique nunc sodales. Id nisi libero massa mi senectus quis. Erat varius tortor lobortis et nunc laoreet cras. ",
  //         right_image: "",
  //         last_image: "",
  //         last_video: "",
  //       }
  //     ],
  //     medias: {
  //       videos: ["https://www.youtube.com/watch?v=lSIWNfNzJ18", "https://www.youtube.com/watch?v=G1GgjXbc6VM"],
  //       images: ["https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"],
  //     },
  //     links: ["https://www.twitch.tv/", "https://www.twitch.tv/elraenn"]
  //   },
  // ]);
};


//user object
// {
//   id: 0,
//   created_at: "02/04/2021",
//   updated_at: "02/04/2022",
//   first_name: "Ömer",
//   last_name: "Demirsoy",
//   age: 22,
//   email: "omerdmrsy@gmail.com",
//   user_image: "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
//   social_links: {
//     linkedn: "https://www.linkedin.com/in/%C3%B6mer-faruk-demirsoy-290642196/",
//     behance: "https://www.behance.net/betul-0zkan",
//     medium: "https://medium.com/@betul-0zkan",
//     instagram: "",
//     github: "https://github.com/OFD16",
//   },
//   introduction: "I am a 20-year-old, self-taught freelance UI/UX designer based in Turkey. My passion is to using design to inspire and impact others, so I make it a point to constantly improve my skills and write my learnings in both English and Turkish.",

//   description: "Lorem ipsum dolor sit amet consectetur. In volutpat sed quis tortor magna libero mi. At aliquam nec consectetur sem eget nunc aliquam. In adipiscing sit tristique nunc sodales. Id nisi libero massa mi senectus quis. Erat varius tortor lobortis et nunc laoreet cras. Lorem ipsum dolor sit amet consectetur. In volutpat sed quis tortor magna libero mi. At aliquam nec consectetur sem eget nunc aliquam. In adipiscing sit tristique nunc sodales. Id nisi libero massa mi senectus quis. Erat varius tortor lobortis et nunc laoreet cras. Lorem ipsum dolor sit amet consectetur. In volutpat sed quis tortor magna libero mi. At aliquam nec consectetur sem eget nunc aliquam. In adipiscing sit tristique nunc sodales. Id nisi libero massa mi senectus quis. Erat varius tortor lobortis et nunc laoreet cras. ",
//   medias: {
//     videos: ["https://www.youtube.com/watch?v=lSIWNfNzJ18", "https://www.youtube.com/watch?v=G1GgjXbc6VM"],
//     images: ["https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"],
//   },
//   marked_projects: [2, 7],
//   marked_blogs: [],
//   experiences: [
//     { started_time: "01/01/2023", finished_time: "01/03/2023", company_name: "Figma", job_name: "UI/UX designer", introduction: "I am a 20-year-old, self-taught freelance UI/UX designer based in Turkey. My passion is to using design to inspire and impact others, so I make it a point to constantly improve my skills and write my learnings in both English and Turkish.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1000px-Instagram_logo_2022.svg.png" },
//     { started_time: "01/01/2023", finished_time: "", company_name: "google", job_name: "coder", introduction: "I am a 20-year-old, self-taught freelance UI/UX designer based in Turkey. My passion is to using design to inspire and impact others, so I make it a point to constantly improve my skills and write my learnings in both English and Turkish.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1000px-Instagram_logo_2022.svg.png" }
//   ],
//   education: [
//     { started_time: "01/01/2015", finished_time: "01/03/2020", school_name: "EAİHL", degree: "Lise", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1000px-Instagram_logo_2022.svg.png" },
//     { started_time: "01/01/2020", finished_time: "01/03/2026", school_name: "AGÜ", degree: "lisans", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1000px-Instagram_logo_2022.svg.png" },
//   ],
//   skills: [
//     { skill_name: "java", experience_time: "6 ay", description: "Lorem ipsum dolor sit amet consectetur. In volutpat sed quis tortor magna libero mi. At aliquam nec consectetur sem eget nunc aliquam. In adipiscing sit tristique nunc sodales.", image: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png" },
//     { skill_name: "c++", experience_time: "1 ay", description: "Lorem ipsum dolor sit amet consectetur. In volutpat sed quis tortor magna libero mi. At aliquam nec consectetur sem eget nunc aliquam. In adipiscing sit tristique nunc sodales.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png" },
//   ],
//   sign_email: "omer@gmail.com",
//   password: "123456"
// },

//project object
// {
//   id: 1,
//   project_name: "proje adı 1",
//   project_type: "proje tipi 1",
//   project_title: "proje başlıpı 1",
//   intro_image: "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
//   project_intro: "1 I am a 20-year-old, self-taught freelance UI/UX designer based in Turkey. My passion is to using design to inspire and impact others, so I make it a point to constantly improve my skills and write my learnings in both English and Turkish.",
//   paragraphs: [
//     {
//       first_video: "",
//       first_image: "",
//       left_image: "",
//       paragpaph: "1 Lorem ipsum dolor sit amet consectetur. In volutpat sed quis tortor magna libero mi. At aliquam nec consectetur sem eget nunc aliquam. In adipiscing sit tristique nunc sodales. Id nisi libero massa mi senectus quis. Erat varius tortor lobortis et nunc laoreet cras. Lorem ipsum dolor sit amet consectetur. In volutpat sed quis tortor magna libero mi. At aliquam nec consectetur sem eget nunc aliquam. In adipiscing sit tristique nunc sodales. Id nisi libero massa mi senectus quis. Erat varius tortor lobortis et nunc laoreet cras. Lorem ipsum dolor sit amet consectetur. In volutpat sed quis tortor magna libero mi. At aliquam nec consectetur sem eget nunc aliquam. In adipiscing sit tristique nunc sodales. Id nisi libero massa mi senectus quis. Erat varius tortor lobortis et nunc laoreet cras. ",
//       right_image: "",
//       last_image: "",
//       last_video: "",
//     },
//     {
//       first_video: "",
//       first_image: "",
//       left_image: "",
//       paragpaph: "1 Lorem ipsum dolor sit amet consectetur. In volutpat sed quis tortor magna libero mi. At aliquam nec consectetur sem eget nunc aliquam. In adipiscing sit tristique nunc sodales. Id nisi libero massa mi senectus quis. Erat varius tortor lobortis et nunc laoreet cras. Lorem ipsum dolor sit amet consectetur. In volutpat sed quis tortor magna libero mi. At aliquam nec consectetur sem eget nunc aliquam. In adipiscing sit tristique nunc sodales. Id nisi libero massa mi senectus quis. Erat varius tortor lobortis et nunc laoreet cras. Lorem ipsum dolor sit amet consectetur. In volutpat sed quis tortor magna libero mi. At aliquam nec consectetur sem eget nunc aliquam. In adipiscing sit tristique nunc sodales. Id nisi libero massa mi senectus quis. Erat varius tortor lobortis et nunc laoreet cras. ",
//       right_image: "",
//       last_image: "",
//       last_video: "",
//     }
//   ],
//   medias: {
//     videos: ["https://www.youtube.com/watch?v=lSIWNfNzJ18", "https://www.youtube.com/watch?v=G1GgjXbc6VM"],
//     images: ["https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"],
//   },
//   members: ["1ali", "a1yşe"],
//   links: ["https://www.twitch.tv/", "https://www.twitch.tv/elraenn"]
// }

//post object 
// {
//   id: 1,
//   post_name: "post adı 1",
//   psot_type: "post tipi 1",
//   post_title: "post başlıpı 1",
//   intro_image: "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
//   post_intro: "1 I am a 20-year-old, self-taught freelance UI/UX designer based in Turkey. My passion is to using design to inspire and impact others, so I make it a point to constantly improve my skills and write my learnings in both English and Turkish.",
//   paragraphs: [
//     {
//       first_video: "",
//       first_image: "",
//       left_image: "",
//       paragpaph: "1 Lorem ipsum dolor sit amet consectetur. In volutpat sed quis tortor magna libero mi. At aliquam nec consectetur sem eget nunc aliquam. In adipiscing sit tristique nunc sodales. Id nisi libero massa mi senectus quis. Erat varius tortor lobortis et nunc laoreet cras. Lorem ipsum dolor sit amet consectetur. In volutpat sed quis tortor magna libero mi. At aliquam nec consectetur sem eget nunc aliquam. In adipiscing sit tristique nunc sodales. Id nisi libero massa mi senectus quis. Erat varius tortor lobortis et nunc laoreet cras. Lorem ipsum dolor sit amet consectetur. In volutpat sed quis tortor magna libero mi. At aliquam nec consectetur sem eget nunc aliquam. In adipiscing sit tristique nunc sodales. Id nisi libero massa mi senectus quis. Erat varius tortor lobortis et nunc laoreet cras. ",
//       right_image: "",
//       last_image: "",
//       last_video: "",
//     },
//     {
//       first_video: "",
//       first_image: "",
//       left_image: "",
//       paragpaph: "1 Lorem ipsum dolor sit amet consectetur. In volutpat sed quis tortor magna libero mi. At aliquam nec consectetur sem eget nunc aliquam. In adipiscing sit tristique nunc sodales. Id nisi libero massa mi senectus quis. Erat varius tortor lobortis et nunc laoreet cras. Lorem ipsum dolor sit amet consectetur. In volutpat sed quis tortor magna libero mi. At aliquam nec consectetur sem eget nunc aliquam. In adipiscing sit tristique nunc sodales. Id nisi libero massa mi senectus quis. Erat varius tortor lobortis et nunc laoreet cras. Lorem ipsum dolor sit amet consectetur. In volutpat sed quis tortor magna libero mi. At aliquam nec consectetur sem eget nunc aliquam. In adipiscing sit tristique nunc sodales. Id nisi libero massa mi senectus quis. Erat varius tortor lobortis et nunc laoreet cras. ",
//       right_image: "",
//       last_image: "",
//       last_video: "",
//     }
//   ],
//   medias: {
//     videos: ["https://www.youtube.com/watch?v=lSIWNfNzJ18", "https://www.youtube.com/watch?v=G1GgjXbc6VM"],
//     images: ["https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"],
//   },
//   post_owner: "betül",
//   links: ["https://www.twitch.tv/", "https://www.twitch.tv/elraenn"]
// }
