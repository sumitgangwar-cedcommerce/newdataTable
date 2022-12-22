/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { X } from "react-feather";
import TextStyles from "../TextStyles/TextStyles";
import "./AnnouncementBar.css";

const AnnouncementBar: React.FC<AnnouncementBarI> = ({
  type = "info",
  children,
  align = "center",
  // desrtoy return true or false and show hide icon
  destroy = true,
  //onClose function , User click cross button then hide AnnouncementBar
  onClose,
  active = true,
}: AnnouncementBarI) => {
  function checkAnnouncementType() {
    switch (type) {
      case "warning":
        return "inte-Announcement--warning";
      case "danger":
        return "inte-Announcement--danger";
      case "success":
        return "inte-Announcement--success";
      case "info":
        return "inte-Announcement--info";
      default:
        return "";
    }
  }
  function checkAlignment() {
    switch (align) {
      case "center":
        return "inte-Announcement--center";
      case "left":
        return "inte-Announcement--left";
      case "right":
        return "inte-Announcement--right";
      default:
        return "";
    }
  }
  const typeAnnouncement = checkAnnouncementType();
  const typeAlignment = checkAlignment();
  return (
    <>
      {active && (
        <div
          className={
            destroy
              ? `inte-AnnouncmentBar--Close inte-AnnouncementBar ${typeAnnouncement} ${typeAlignment}`
              : `inte-AnnouncementBar ${typeAnnouncement} ${typeAlignment}`
          }
        >
          <div className={"inte-AnnouncementBar__content"}>
            <TextStyles fontweight="normal">{children}</TextStyles>
          </div>

          {destroy && (
            <div className={"inte-AnnouncementBar__action"}>
              <button onClick={onClose}>
                <X size={14} color={"#3b424f"} strokeWidth={3} />
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};
export interface AnnouncementBarI {
  type?: "warning" | "success" | "danger" | "info";
  align?: "right" | "left" | "center";
  children?: any;
  onClose?: () => void;
  destroy?: boolean;
  active?: boolean;
}

export default AnnouncementBar;
