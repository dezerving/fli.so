/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	Customers = "customers",
	Domains = "domains",
	Subscriptions = "subscriptions",
	Tags = "tags",
	Urls = "urls",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type CustomersRecord = {
	stripe_customer_id: string
	user_id?: RecordIdString
}

export enum DomainsStatusOptions {
	"pending" = "pending",
	"verified" = "verified",
}

export enum DomainsVerificationMethodOptions {
	"dns" = "dns",
	"file" = "file",
}
export type DomainsRecord = {
	domain?: string
	status?: DomainsStatusOptions
	user_id?: RecordIdString
	verification_method?: DomainsVerificationMethodOptions
	verification_token?: string
}

export enum SubscriptionsStatusOptions {
	"incomplete" = "incomplete",
	"incomplete_expired" = "incomplete_expired",
	"trialing" = "trialing",
	"active" = "active",
	"past_due" = "past_due",
	"canceled" = "canceled",
	"unpaid" = "unpaid",
	"pause" = "pause",
}
export type SubscriptionsRecord = {
	cancel_at_period_end?: boolean
	canceled_at?: IsoDateString
	current_period_end?: IsoDateString
	current_period_start?: IsoDateString
	customer_id?: RecordIdString
	plan_name?: string
	status?: SubscriptionsStatusOptions
	stripe_price_id?: string
	stripe_subscription_id?: string
	user_id?: RecordIdString
}

export type TagsRecord = {
	color?: string
	created_by?: RecordIdString
	name?: string
}

export type UrlsRecord = {
	clicks?: number
	created_by?: RecordIdString
	domain_id?: RecordIdString
	expiration?: IsoDateString
	expiration_url?: string
	meta_description?: string
	meta_image_url?: string
	meta_title?: string
	password_hash?: string
	qr_code?: string
	slug: string
	tags_id?: RecordIdString[]
	url: string
}

export type UsersRecord = {
	avatar?: string
	name?: string
	is_blocked?: boolean
}

// Response types include system fields and match responses from the PocketBase API
export type CustomersResponse<Texpand = unknown> = Required<CustomersRecord> & BaseSystemFields<Texpand>
export type DomainsResponse<Texpand = unknown> = Required<DomainsRecord> & BaseSystemFields<Texpand>
export type SubscriptionsResponse<Texpand = unknown> = Required<SubscriptionsRecord> & BaseSystemFields<Texpand>
export type TagsResponse<Texpand = unknown> = Required<TagsRecord> & BaseSystemFields<Texpand>
export type UrlsResponse<Texpand = unknown> = Required<UrlsRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	customers: CustomersRecord
	domains: DomainsRecord
	subscriptions: SubscriptionsRecord
	tags: TagsRecord
	urls: UrlsRecord
	users: UsersRecord
}

export type CollectionResponses = {
	customers: CustomersResponse
	domains: DomainsResponse
	subscriptions: SubscriptionsResponse
	tags: TagsResponse
	urls: UrlsResponse
	users: UsersResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: 'customers'): RecordService<CustomersResponse>
	collection(idOrName: 'domains'): RecordService<DomainsResponse>
	collection(idOrName: 'subscriptions'): RecordService<SubscriptionsResponse>
	collection(idOrName: 'tags'): RecordService<TagsResponse>
	collection(idOrName: 'urls'): RecordService<UrlsResponse>
	collection(idOrName: 'users'): RecordService<UsersResponse>
}
