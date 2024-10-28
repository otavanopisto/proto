import { Announcement } from "../types";
import dayjs from "../utils/time";

const created = dayjs().format("LLL");
const started = dayjs().format("LLL");
const ends = dayjs().add(1, "day").format("LLL");

export const ANNOUNCEMENTS: Announcement[] = [
  {
    id: 1,
    caption: "Tiedote 1",
    content: "Varis raakkuu",
    created: created,
    startDate: started,
    endDate: ends,
    publiclyVisible: true,
    publisherUserEntityId: 1,
    temporalStatus: "active",
    userGroupEntityIds: [1],
    workspaceEntityIds: [1],
  },
  {
    id: 2,
    caption: "Tiedote 2",
    content: "Kissa oksentaa matolle",
    created: created,
    startDate: started,
    endDate: ends,
    publiclyVisible: true,
    publisherUserEntityId: 1,
    temporalStatus: "active",
    userGroupEntityIds: [1],
    workspaceEntityIds: [1],
  },
  {
    id: 3,
    caption: "Tiedote 3",
    content: "Koira syö kiviä",
    created: created,
    startDate: started,
    endDate: ends,
    publiclyVisible: true,
    publisherUserEntityId: 1,
    temporalStatus: "active",
    userGroupEntityIds: [1],
    workspaceEntityIds: [1],
  },
  {
    id: 4,
    caption: "Tiedote 4",
    content: "Siili kiipeää puuhun ",
    created: created,
    startDate: started,
    endDate: ends,
    publiclyVisible: true,
    publisherUserEntityId: 1,
    temporalStatus: "active",
    userGroupEntityIds: [1],
    workspaceEntityIds: [1],
  },
  {
    id: 5,
    caption: "Tiedote 5",
    content: "Lehmä tanssii jenkkaa",
    created: created,
    startDate: started,
    endDate: ends,
    publiclyVisible: true,
    publisherUserEntityId: 1,
    temporalStatus: "active",
    userGroupEntityIds: [1],
    workspaceEntityIds: [1],
  },
  {
    id: 6,
    caption: "Tiedote 6",
    content: "Irma kostaa",
    created: created,
    startDate: started,
    endDate: ends,
    publiclyVisible: true,
    publisherUserEntityId: 1,
    temporalStatus: "active",
    userGroupEntityIds: [1],
    workspaceEntityIds: [1],
  },
];