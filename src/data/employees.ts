

const employees = [
    {
      id: 1,
      firstName: "Colin",
      lastName: "Murray",
      teamName: "alpha",
      isTeamLeader: true,
      avatar: "/images/cm.jpg",
    },
    {
      id: 2,
      firstName: "Tom",
      lastName: "Phillips",
      teamName: "alpha",
      isTeamLeader: false,
    },
    {
      id: 3,
      firstName: "Liam",
      lastName: "Fuentes",
      teamName: "alpha",
      isTeamLeader: false,
    },
    {
      id: 4,
      firstName: "Tina",
      lastName: "Fey",
      teamName: "canary",
      isTeamLeader: true,
      avatar: "/images/tf.jpg",
    },
    {
      id: 5,
      firstName: "Katie",
      lastName: "Johnson",
      teamName: "canary",
      isTeamLeader: false,
    },
    {
      id: 6,
      firstName: "Tina",
      lastName: "Jones",
      teamName: "canary",
      isTeamLeader: false,
    },
    {
      id: 7,
      firstName: "Amy",
      lastName: "Adams",
      teamName: "delta",
      isTeamLeader: true,
    },
    {
      id: 8,
      firstName: "Ryan",
      lastName: "Lopez",
      teamName: "delta",
      isTeamLeader: false,
      avatar: "/images/rl.jpg",
    },
    {
      id: 9,
      firstName: "Jenny",
      lastName: "Jones",
      teamName: "delta",
      isTeamLeader: false,
    },


    {
      id: 10,
      firstName: "Colin",
      lastName: "Murray",
      teamName: "alpha",
      isTeamLeader: true,
      avatar: "/images/cm.jpg",
    },
    {
      id: 11,
      firstName: "Tom",
      lastName: "Phillips",
      teamName: "alpha",
      isTeamLeader: false,
    },
    {
      id: 12,
      firstName: "Liam",
      lastName: "Fuentes",
      teamName: "alpha",
      isTeamLeader: false,
    },
    {
      id: 13,
      firstName: "Tina",
      lastName: "Fey",
      teamName: "canary",
      isTeamLeader: true,
      avatar: "/images/tf.jpg",
    },
    {
      id: 14,
      firstName: "Katie",
      lastName: "Johnson",
      teamName: "canary",
      isTeamLeader: false,
    },
    {
      id: 15,
      firstName: "Tina",
      lastName: "Jones",
      teamName: "canary",
      isTeamLeader: false,
    },
    {
      id: 16,
      firstName: "Amy",
      lastName: "Adams",
      teamName: "delta",
      isTeamLeader: true,
    },
    {
      id: 17,
      firstName: "Ryan",
      lastName: "Lopez",
      teamName: "delta",
      isTeamLeader: false,
      avatar: "/images/rl.jpg",
    },
    {
      id: 18,
      firstName: "마지막",
      lastName: "Jones",
      teamName: "delta",
      isTeamLeader: false,
    },

  ];
  

export const getEmployeesData = () => {
    return employees.map((employee) => ({ ...employee}));
};
