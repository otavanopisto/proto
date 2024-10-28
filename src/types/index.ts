export type NavigationItem = {
  label: string;
  icon: string;
  url?: string;
  indicator?: boolean;
  onClick?: () => void;
};

export interface WorkspaceData {
  archived: boolean;
  curriculumIdentifiers: Array<string>;
  description: string;
  hasCustomImage: boolean;
  id: number;
  lastVisit: string;
  materialDefaultLicense: string;
  name: string;
  nameExtension?: string | null;
  numVisits: number;
  published: boolean;
  urlName: string;
  organizationEntityId: number;
  isCourseMember?: boolean;
  educationTypeName?: string;
  studentCount?: number;
}

export interface MessageThread {
  id: number;
  communicatorMessageId: number;
  caption: string;
  categoryName: string;
  content: string;
  created: string;
  unreadMessagesInThread: boolean;
  threadLatestMessageDate: string;
}

export interface Announcement {
  caption: string;
  content: string;
  created: string;
  endDate: string;
  id: number;
  publiclyVisible: boolean;
  publisherUserEntityId: number;
  startDate: string;
  temporalStatus: string;
  userGroupEntityIds: Array<number>;
  workspaceEntityIds: Array<number>;
}

export interface Note {
  id: number;
  title: string;
  description: string;
  priority: "OWN" | "LOW" | "NORMAL" | "HIGH";
  pinned: boolean;
  isActive: boolean;
  isArchived: boolean;
  owner: number;
  creator: number;
  creatorName: string;
  created: Date;
  startDate: Date | null;
  dueDate: Date | null;
  status: "ONGOING" | "APPROVAL_PENDING" | "APPROVED";
}
