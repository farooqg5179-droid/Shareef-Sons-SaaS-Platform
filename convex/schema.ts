import {defineSchema,defineTable} from "convex/server";
import {v} from "convex/values";
import {authTables} from "@convex-dev/auth/server";
export default defineSchema({...authTables,
 bookings:defineTable({customerName:v.string(),phone:v.string(),whatsapp:v.string(),email:v.optional(v.string()),eventType:v.string(),eventDate:v.string(),guestCount:v.number(),venue:v.string(),city:v.string(),services:v.string(),budget:v.optional(v.string()),details:v.optional(v.string()),preferredGalleryIds:v.optional(v.array(v.id("gallery"))),stageVideoUrl:v.optional(v.string()),status:v.string(),source:v.string(),createdAt:v.optional(v.number())}).index("by_created_at",["createdAt"]).index("by_event_date",["eventDate"]),
 gallery:defineTable({title:v.string(),category:v.string(),description:v.optional(v.string()),fileId:v.string(),imageUrl:v.string(),contentType:v.string(),fileSize:v.number(),isPublished:v.boolean(),isInspiration:v.optional(v.boolean()),createdAt:v.number()}).index("by_created_at",["createdAt"]).index("by_published",["isPublished"]),
 analyticsEvents:defineTable({visitorId:v.string(),path:v.string(),referrer:v.optional(v.string()),device:v.string(),createdAt:v.number()}).index("by_created_at",["createdAt"]).index("by_visitor",["visitorId"]),
 branding:defineTable({fileId:v.string(),imageUrl:v.string(),contentType:v.string(),fileSize:v.number(),updatedAt:v.number()})
});
