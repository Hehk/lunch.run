import Head from "next/head"
import Link from "next/link"
import MinimalLayout from "../components/minimal_layout"
import React from "react"

type event = {
  name: string
  description: string
  location: string
  time: {
    day: number
    hour: number
    minute: number
  }
}

type group = {
  name: string
  description?: string
  social: {
    instagram?: string
    facebook?: string
    website?: string
    strava?: string
    twitter?: string
  }
  runs: event[]
}

const groups: Record<string, group> = {
  SPEEDSHOP_MAFIA: {
    name: "SpeedShop Mafia",
    social: {
      facebook: "https://www.facebook.com/groups/173579006902668/",
    },
    runs: [
      {
        name: "SpeedShop Workout",
        description:
          "Workout rotates, check out their facebook for which one it will be",
        location: "Yellowjacket Stadium",
        time: {
          hour: 18,
          minute: 0,
          day: 2,
        },
      },
    ],
  },
  SUNRISE_TRACK_CLUB: {
    name: "Sunrise Track Club",
    social: {
      instagram: "https://www.instagram.com/sunrise_track_club/",
    },
    runs: [
      {
        name: "Sunrise Track Club Track Workout",
        description: "Workout varies",
        location: "Austin High School",
        time: {
          hour: 6,
          minute: 0,
          day: 4,
        },
      },
    ],
  },
  NORTH_AUSTIN_RUN_CLUB: {
    name: "North Austin Run Club",
    social: {
      facebook: "https://www.facebook.com/NorthAustinRunClub/",
    },
    runs: [
      {
        name: "North Austin Run Club Evening Social Run",
        description: "Evening Run",
        location: "Little Woodrow's Burnet",
        time: {
          hour: 19,
          minute: 0,
          day: 1,
        },
      },
    ],
  },
  AUSTIN_BEER_RUNNERS: {
    name: "Austin Beer Runners",
    social: {
      facebook: "https://www.facebook.com/AustinBeerRunClub",
      twitter: "https://twitter.com/AustinBeerRun",
      website: "https://www.austinbeerrun.club/",
    },
    runs: [
      {
        name: "Austin Beer Runners 5k",
        description: "About 5k",
        location: "Hold Out Brewing",
        time: {
          hour: 18,
          minute: 30,
          day: 2,
        },
      },
    ],
  },
  SHOAL_CREEK_STRIDERS: {
    name: "Shoal Creek Striders",
    social: {
      instagram: "https://www.instagram.com/shoalcreekstriders/",
      website: "https://linktr.ee/shoalcreekstriders",
      facebook: "https://www.facebook.com/ShoalCreekStriders/",
    },
    runs: [
      {
        name: "Shoal Creek Striders",
        description: "3-5 miles",
        location: "3900 Far W Blvd, Austin, TX 78731",
        time: {
          hour: 6,
          minute: 30,
          day: 1,
        },
      },
      {
        name: "Shoal Creek Striders",
        description: "3-5 miles",
        location: "2917 W. Anderson Ln, Austin, TX 78757",
        time: {
          hour: 6,
          minute: 30,
          day: 3,
        },
      },
      {
        name: "Shoal Creek Striders",
        description: "3-5 miles",
        location: "2917 W. Anderson Ln, Austin, TX 78757",
        time: {
          hour: 6,
          minute: 30,
          day: 5,
        },
      },
    ],
  },
  MORNING_JOES: {
    name: "Morning Joe's",
    social: {
      facebook: "https://www.facebook.com/groups/themorningjos/",
      strava: "https://www.strava.com/clubs/themorningjos",
      instagram: "https://www.instagram.com/themorningjos/",
    },
    runs: [
      {
        name: "Morning Jo's",
        description:
          "An inviting free run group open to all runners, they run 3-6 miles at verious paces.",
        location: "Jo's Coffee at 1300 S Congress Ave, Austin, TX 78704",
        time: {
          hour: 6,
          minute: 30,
          day: 2,
        },
      },
    ],
  },
  A_SHIP_OF_FOOLS: {
    name: "A Ship of Fools",
    description:
      "Before joining the group, make sure to sign their waiver. It can be found on their website.",
    social: {
      website: "https://alsshipoffools.com/",
    },
    runs: [
      {
        name: "Jerie's Kid Early Bidy",
        description:
          "The pace can be brisk.  It’s dark.  Be prepared for 7 – 10 miles at around 8:30 per mile.",
        location: "The Rock at Town Lake",
        time: {
          hour: 5,
          minute: 20,
          day: 1,
        },
      },
      {
        name: "Ship of Fools",
        description: "Track workout",
        location: "O. Henry Middle School",
        time: {
          hour: 18,
          minute: 0,
          day: 2,
        },
      },
      {
        name: "Jerie's Kid Early Bidy",
        description:
          "The pace can be brisk.  It’s dark.  Be prepared for 7 – 10 miles at around 8:30 per mile.",
        location: "The Rock at Town Lake",
        time: {
          hour: 5,
          minute: 20,
          day: 4,
        },
      },
      {
        name: "Ship of Fools Hills",
        description: "Hills",
        location: "O. Henry Middle School",
        time: {
          hour: 18,
          minute: 0,
          day: 4,
        },
      },
      {
        name: "Ship of Fools Long Run",
        description:
          "Long run ranging from 4-20 miles. The parking lot typically fills up by 6:45 am so plan accordingly.",
        location: "0 mile marker on the Town Lake",
        time: {
          hour: 7,
          minute: 0,
          day: 6,
        },
      },
    ],
  },
  COMMODORE_RUN_CLUB: {
    name: "Commodor Run Club",
    social: {
      website: "https://comedorrunclub.com/",
      instagram: "https://www.instagram.com/comedorrunclub/",
    },
    runs: [
      {
        name: "Commodor Run Club",
        description: "5k",
        location: "501 Colorado St",
        time: {
          hour: 10,
          minute: 0,
          day: 1,
        },
      },
      {
        name: "Commodor Run Club",
        description: "5k",
        location: "501 Colorado St",
        time: {
          hour: 10,
          minute: 0,
          day: 3,
        },
      },
      {
        name: "Commodor Run Club",
        description: "5k",
        location: "3401 Webberville Road at ACC Eastview",
        time: {
          hour: 20,
          minute: 0,
          day: 4,
        },
      },
      {
        name: "Commodor Run Club",
        description: "5k",
        location: "501 Colorado St",
        time: {
          hour: 10,
          minute: 0,
          day: 5,
        },
      },
    ],
  },
  RISE_AND_RUN_SOUTH: {
    name: "Rise and Run South",
    description: "South Austin run club",
    social: {
      website: "https://linktr.ee/RiseandRunATX",
      facebook: "https://www.facebook.com/groups/195495531167130/?ref=share",
      strava: "https://www.strava.com/clubs/riseandrunsouthaustin",
    },
    runs: [
      {
        name: "Rise and Run South",
        description: "Evening Run",
        location: "Subway at 11215 S IH 35 (IH-35 and Onion Creek Parkway)",
        time: {
          hour: 19,
          minute: 0,
          day: 1,
        },
      },
      {
        name: "Rise and Run South",
        description: "South Austin running group.",
        location: "500 West William Cannon (park near Mcdonalds)",
        time: {
          hour: 5,
          minute: 0,
          day: 2,
        },
      },
      {
        name: "Rise and Run South",
        description: "South Austin running group.",
        location: "CVS 520 W Slaughter Ln",
        time: {
          hour: 5,
          minute: 0,
          day: 4,
        },
      },
      {
        name: "Rise and Run South Mount Bonnell",
        description: "Trail run, first Sunday of the month.",
        location: "Mount Bonnell",
        time: {
          hour: 6,
          minute: 0,
          day: 7,
        },
      },
      {
        name: "Rise and Run South Coffee Run",
        description: "Coffee run, third Sunday of the month.",
        location: "Location varies, check social",
        time: {
          hour: 7,
          minute: 0,
          day: 4,
        },
      },
    ],
  },
  AUSTIN_INFORMAL_RUNNING_CLUB: {
    name: "Austin Informal Running Club",
    social: {
      website:
        "https://www.meetup.com/Austin-Informal-Running-Club-Home-of-TMIRCE-ATX/",
    },
    runs: [
      {
        name: "Austin Informal Running Club",
        description: "Track Workout",
        location: "Austin High School",
        time: {
          hour: 19,
          minute: 30,
          day: 1,
        },
      },
      {
        name: "Run + Brunch",
        description: "Casual Saturday run. All levels welcome",
        location: "Ski Shores",
        time: {
          hour: 8,
          minute: 0,
          day: 6,
        },
      },
    ],
  },
  LOOP_RUNNINGS: {
    name: "The Loop Running",
    description: "",
    social: {
      website: "https://www.looprunningsupply.co/collections/community",
      facebook: "https://www.facebook.com/thelooprunning/",
      instagram: "https://www.instagram.com/thelooprunning/",
      strava: "https://www.strava.com/clubs/288912",
    },
    runs: [
      {
        name: "The Loop Running Night Run",
        description:
          "3, 5, 7 mile loops on loops on loops. All paces welcome as always!",
        location: "The Loop Running Store",
        time: {
          hour: 18,
          minute: 30,
          day: 2,
        },
      },
      {
        name: "The Loop Running Night Run",
        description: "3ish miles. All paces welcome as always!",
        location: "The Loop Running Store",
        time: {
          hour: 18,
          minute: 30,
          day: 4,
        },
      },
    ],
  },
  RAW_RUNNING: {
    name: "Raw Running",
    social: {
      website: "https://www.raw.run/",
      twitter: "https://twitter.com/RAW_RUNNING",
      instagram: "https://www.instagram.com/rawrunning/",
      facebook: "https://www.facebook.com/rawrunning/",
    },
    runs: [
      {
        name: "Raw Running HAF Workout",
        description:
          "These workouts range from 400s on the track, to hills, mile repeats, and other hard efforts.",
        location: "Mean Eyed Cat",
        time: {
          hour: 19,
          minute: 0,
          day: 2,
        },
      },
      {
        name: "Fleet Feet CAF",
        description: "Chill run, 3-7 miles.",
        location: "Fleet Feet Austin",
        time: {
          hour: 6,
          minute: 30,
          day: 5,
        },
      },
    ],
  },
  MANSION_RUN: {
    name: "Mansion Run",
    description: "",
    social: {
      website: "https://atxrunners.org/mansion-run",
    },
    runs: [
      {
        name: "Mansion Run",
        description: "Fun run with 5, 7, or 8 mile options.",
        location: "7510 Downridge Dr., Austin, TX",
        time: {
          day: 3,
          hour: 5,
          minute: 30,
        },
      },
    ],
  },
  NOVEMBER_PROJECT: {
    name: "November Project",
    description: "",
    social: {
      website: "https://november-project.com/austin-tx/",
      instagram: "https://www.instagram.com/novemberprojectatx/",
      twitter: "https://twitter.com/nov_project_atx",
      facebook: "https://www.facebook.com/novemberprojectaustin",
    },
    runs: [
      {
        name: "November Project",
        description: "Varies",
        location: "Waterloo Park",
        time: {
          hour: 6,
          minute: 0,
          day: 3,
        },
      },
      {
        name: "November Project",
        description: "Varies",
        location: "Butler District Park",
        time: {
          hour: 6,
          minute: 0,
          day: 5,
        },
      },
    ],
  },
  EAST_SIDE_BEER_RUNNERS: {
    name: "East Side Beer Runners",
    description: "",
    social: {
      instagram: "https://www.instagram.com/esbrunnersatx",
      facebook: "https://www.facebook.com/groups/EastSideBeerRunners/",
    },
    runs: [
      {
        name: "East Side Beer Runners",
        description:
          "Different workouts every week, take whatever pace you want.",
        location: "Central Machine Works",
        time: {
          day: 3,
          hour: 18,
          minute: 30,
        },
      },
      {
        name: "East Side Beer Runners Trail Run",
        description: "Easy morning trail run.",
        location: "Check the group slack",
        time: {
          day: 7,
          hour: 8,
          minute: 0,
        },
      },
    ],
  },
  GILBERTS_GAZELLE: {
    name: "Gilbert's Gazelles",
    description: "",
    social: {
      website: "https://www.gilbertsgazelles.com/",
      facebook: "https://www.facebook.com/gilbertsgazelles",
      instagram: "https://www.instagram.com/gilbertsgazellesatx/",
    },
    runs: [
      {
        name: "Saturday Gazelles",
        description:
          "Long run ranging from 3-22 miles, hydration stops and post run strength. This is a paid group, you can pay $10 to jump in.",
        location: "The Loop Running Store",
        time: {
          day: 6,
          hour: 5,
          minute: 45,
        },
      },
    ],
  },
}

function getDay(num: number) {
  switch (num) {
    case 1:
      return "monday"
    case 2:
      return "tuesday"
    case 3:
      return "wednesday"
    case 4:
      return "thursday"
    case 5:
      return "friday"
    case 6:
      return "saturday"
    case 7:
      return "sunday"
    default:
      return "sunday"
  }
}
let events: Record<string, event[]> = {
  monday: [],
  tuesday: [],
  wednesday: [],
  thursday: [],
  friday: [],
  saturday: [],
  sunday: [],
}
events = Object.values(groups).reduce((events, group) => {
  group.runs.forEach((event) => {
    events[getDay(event.time.day)].push(event)
    events[getDay(event.time.day)].sort((a, b) => {
      let diff = a.time.hour - b.time.hour
      if (diff === 0) return a.time.minute - b.time.minute
      return diff
    })
  })
  return events
}, events)

function padZero(time: number) {
  let output = time.toString()
  if (output.length === 1) {
    return "0" + output
  } else {
    return output
  }
}

function formatHour(hour: number) {
  if (hour >= 13) hour -= 12
  return padZero(hour)
}

function AMorPM(hour: number) {
  if (hour >= 12) return "PM"
  return "AM"
}

function Event({ event }: { event: event }) {
  return (
    <li>
      <div>
        <span className="time">
          <span>
            {formatHour(event.time.hour)}:{padZero(event.time.minute)}
          </span>
          {AMorPM(event.time.hour)}
        </span>
        &nbsp;
        {event.name}
      </div>
      <span className="description">{event.description}</span>
      <span className="location">@ {event.location}</span>

      <style jsx>{`
        .time {
          font-weight: bold;
        }

        .description,
        .location {
          padding-left: 1rem;
          display: block;
        }
      `}</style>
    </li>
  )
}

function Social({ link, name }: { link?: string; name: string }) {
  if (!link) return null
  return (
    <>
      <Link href={link}>
        <a>{name}</a>
      </Link>
      <style jsx>{`
        a {
          padding-right: 1rem;
        }
      `}</style>
    </>
  )
}

export default function Austin() {
  return (
    <MinimalLayout>
      <Head>
        <title>Austin Running</title>
        <meta name="description" content="Austin Run Groups" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/running.ico" />
      </Head>

      <main>
        <h1>Austin Running</h1>
        {Object.entries(events).map(([day, events]) => {
          return (
            <React.Fragment key={day}>
              <h2>{day}</h2>
              <ol>
                {events.map((event) => (
                  <Event event={event} key={event.name} />
                ))}
              </ol>
            </React.Fragment>
          )
        })}

        <h2>Groups</h2>
        {Object.entries(groups).map(([id, group]) => {
          return (
            <div key={id}>
              <h3 className="group">{group.name}</h3>
              <div className="group-social">
                <Social name="Insta" link={group.social.instagram} />
                <Social name="Website" link={group.social.website} />
                <Social name="Strava" link={group.social.strava} />
                <Social name="Twitter" link={group.social.twitter} />
                <Social name="Facebook" link={group.social.facebook} />
              </div>
            </div>
          )
        })}
      </main>

      <style jsx>{`
        main {
          padding: 1rem;
          font-family: sans-serif;
          font-size: 16px;
        }

        ol {
          list-style: none;
          padding-left: 1rem;
        }

        .group {
          margin-bottom: 0;
          padding: 0 1rem;
        }

        .group-social {
          padding-left: 1rem;
        }
      `}</style>
    </MinimalLayout>
  )
}
