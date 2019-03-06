// ==UserScript==
// @name         Olx wrapper
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @include      /^https?:\/\/www\.olx\.ua\/.*$/
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    window.suggestmeyes_loaded = true;
    window.action='observed';
    window.method='index';
    window.user_logged=0;
    window.www_base='https://www.olx.ua';
    window.www_base_no_namespace='https://www.olx.ua';
    window.www_base_ajax='https://www.olx.ua/ajax';
    window.static_files_www_base='https://static-olxeu.akamaized.net/static/olxua/';
    window.external_static_files_www_base='https://static-olxeu.akamaized.net/static/olxua/naspersclassifieds-regional/olxeu-atlas-web-olxua/static/';
    window.external_static_files_www_base_main='https://static-olxeu.akamaized.net/static/olxua/naspersclassifieds-regional/olxeu-atlas-web/static/';
    window.session_domain='olx.ua';
    window.site_domain='www.olx.ua';
    window.decimal_separator='.';
    window.thousands_separator=' ';
    window.sitecode='olxua';
    window.defaultCurrency='UAH';
    window.config_currency='грн.';
    window.useExternalScripts=1;
    window.lang='uk';
    window.hasRwd=0;
    window.module_landing_homegarden_ua=1;
    window.module_landing_jobs_ua=1;
    window.module_safedeal_always_active=1;
    window.module_store_image_sizes_db=1;
    window.module_store_image_sizes=1;
    window.module_police_bank_info=1;
    window.module_paidads=1;
    window.module_facebook_login=1;
    window.module_new_emails=1;
    window.module_newmoderation=1;
    window.module_payu=1;
    window.module_districts=1;
    window.module_new_search_filters=1;
    window.module_new_myaccount=1;
    window.module_currencies=1;
    window.module_currencies_new=1;
    window.module_sms_notification=1;
    window.module_metro=1;
    window.module_superdeal=1;
    window.module_phone_login=1;
    window.module_contact_as_image=1;
    window.module_mobile_app=1;
    window.module_unfinished_payments=1;
    window.module_new_sms_notification=1;
    window.module_trusted_changes=1;
    window.module_stock_photos_info=1;
    window.module_refugees=1;
    window.module_refugees_adding=1;
    window.module_multiacc=1;
    window.module_olx6=1;
    window.module_gpt_banners=1;
    window.module_i2_payment=1;
    window.module_paid_subscriptions=1;
    window.module_topupaccount=1;
    window.module_old_payment_tables=1;
    window.module_portmone=1;
    window.module_redis_hash=1;
    window.module_rest_api=1;
    window.module_phone_in_desc=1;
    window.module_anonymous_chat_app=1;
    window.module_ads_no_results=1;
    window.module_new_at=1;
    window.module_bonus_credits=1;
    window.module_geo6_multiple_langs=1;
    window.module_crm=1;
    window.module_gpt_banners_i2=1;
    window.module_new_tracking=1;
    window.module_new_tracking_i2=1;
    window.module_ninja_m_legacy=1;
    window.module_clm=1;
    window.module_paid_subscriptions_single=1;
    window.module_user_online_status=1;
    window.module_pushup_new=1;
    window.module_topupaccount_newemail=1;
    window.module_afc_to_dfp=1;
    window.module_no_old_subdomains=1;
    window.module_observed_new=1;
    window.module_ap_ldap_login=1;
    window.module_ads_homepage=1;
    window.module_disable_free_refresh_categories=1;
    window.module_observed_anonymous=1;
    window.module_new_controllers=1;
    window.module_vas_config_wallet=1;
    window.module_vas_config_wallet_before=1;
    window.module_vas_config_nnl_limits=1;
    window.module_vas_config_nnl_business_limits=1;
    window.module_vas_config_topads=1;
    window.module_topupaccount_wallet=1;
    window.module_new_dfp=1;
    window.module_afs_on_empty_search_i2=1;
    window.module_vkontakte_login=1;
    window.module_landing_action=1;
    window.module_split_item_content=1;
    window.module_open_api=1;
    window.module_user_sms_verification=1;
    window.module_user_photo=1;
    window.module_show_limits_price_on_posting_form=1;
    window.module_enable_premium_account=1;
    window.module_bulk_ads_upload=1;
    window.module_flagged_ads=1;
    window.module_shop_filters=1;
    window.module_mandatory_login=1;
    window.module_gemius=1;
    window.module_remove_emailanswers_on_posting=1;
    window.module_multipay_ati_new_report=1;
    window.module_paid_feature_expires=1;
    window.module_nps_survey=1;
    window.module_vas_config_tariff_bonus_points=1;
    window.module_treatments=1;
    window.module_accept_arranged_salary=1;
    window.module_recaptcha=1;
    window.module_app_homescreen_tiles=1;
    window.module_disable_adblock_afs=1;
    window.module_log_sent_emails=1;
    window.module_users_extra_data=1;
    window.module_safedeal=1;
    window.module_safedeal_buyer=1;
    window.module_ad_recommendations_clm=1;
    window.module_phone_views_logs=1;
    window.module_ad_closed_notifications=1;
    window.module_track_features=1;
    window.module_atlasorm=1;
    window.module_discount_tool=1;
    window.module_jobs_free_seek=1;
    window.module_messages_spammers=1;
    window.module_topads_promotions=1;
    window.module_payment_click_tracking=1;
    window.module_pricing_test_group_assignment=1;
    window.module_user_settings_recaptcha=1;
    window.module_vas_valid_to_date=1;
    window.module_change_localisation_label=1;
    window.module_require_register_token=1;
    window.module_ad_paid_features=1;
    window.module_new_jobs=1;
    window.module_tradus=1;
    window.module_mass_tests=1;
    window.module_nps_jobs_survey_db_tables=1;
    window.module_tariff_basket=1;
    window.module_bundles=1;
    window.module_bundles_frontend=1;
    window.module_bundles_vas=1;
    window.module_bundles_infolayer=1;
    window.module_bundles_packet=1;
    window.module_ab_tests=1;
    window.module_tracking_fix=1;
    window.module_new_autocomplete=1;
    window.module_last_messages_in_conversations=1;
    window.module_query_spell_checker=1;
    window.module_cv_upload=1;
    window.module_jobs_message_prefill=1;
    window.module_ad_cache_reload_schedule=1;
    window.module_afs_refactor=1;
    window.module_test_afc_afs_slots_listing=1;
    window.module_disable_verification_targeting=1;
    window.module_adblock_targeting=1;
    window.module_log_ad_limited=1;
    window.module_disable_ads_output_cache=1;
    window.module_disable_ad_output_cache=1;
    window.module_sms_verification_phone_search=1;
    window.module_race_test_prediction=1;
    window.module_b2c_business_page=1;
    window.module_b2c_ad_page=1;
    window.module_b2c_business_banner=1;
    window.module_vas_config_refresh_for_packages=1;
    window.module_packages_new_design=1;
    window.module_vas_logo_link=1;
    window.module_new_category_suggester=1;
    window.module_payment_providers_configurable=1;
    window.module_entry_points_logger=1;
    window.module_buy_package_always_available=1;
    window.module_rabbit_mq=1;
    window.module_register_restrict_email=1;
    window.module_async_event_bus=1;
    window.module_forced_business_categories=1;
    window.module_store_image_update_sizes=1;
    window.module_solr_cloud=1;
    window.module_solr_improvement=1;
    window.module_fraud_detection=1;
    window.module_fraud_detector_queue=1;
    window.module_accurate_location=1;
    window.module_password_hashing=1;
    window.module_hermes_new_api=1;
    window.module_ad_discount=1;
    window.module_ad_discount_push=1;
    window.module_ab_force_login_posting=1;
    window.module_history_extra_info=1;
    window.module_delete_secure=1;
    window.module_appleAllowLongPushes=1;
    window.module_observed_push=1;
    window.module_hide_adverts_slots=1;
    window.module_app_homescreen=1;
    window.module_ads_efficiency=1;
    window.module_mobile_slot_manager=1;
    window.module_wp_nativemode=1;
    window.module_apps_disable_alog=1;
    window.module_app_homescreen_last=1;
    window.module_app_homescreen_clm=1;
    window.module_app_homescreen_category=1;
    window.module_app_homescreen_covisitation=1;
    window.module_app_homescreen_latlon=1;
    window.module_app_homescreen_curated=1;
    window.module_app_homescreen_test=1;
    window.module_app_homescreen_nearby_newest=1;
    window.module_force_login_posting=1;
    window.module_flagged_ads_alter=1;
    window.module_use_www_subdomain=1;
    window.module_group_activation_of_limited_ads=1;
    window.module_ssl_only=1;
    window.module_newrelic_api_app=1;
    window.module_hide_disabled_parameters=1;
    window.module_show_photo_setting=1;
    window.module_new_sidebar=1;
    window.module_vas_treatments_thresholds_test_log=1;
    window.module_xml_remote=1;
    window.module_expire_ads_mailing_queue=1;
    window.module_hermes_messages=1;
    window.module_new_hermes_executor=1;
    window.module_check_nnl_ads=1;
    window.module_legacy_cities=1;
    window.module_mcrouter=1;
    window.module_statistics_i2=1;
    window.module_ignore_sub_region_in_searches=1;
    window.module_multipay_touchpoints=1;
    window.module_fair_expiration=1;
    window.module_fair_expiration_moderated_end=1;
    window.module_users_without_password_detector=1;
    window.module_mandatory_login_for_chat=1;
    window.module_log_erec_emails=1;
    window.module_new_conversation_limiter=1;
    window.module_standarize_username=1;
    window.module_eventbus_publisher=1;
    window.module_hide_promotions_on_posting=1;
    window.module_pushup_automatic=1;
    window.module_phone_views_block_scammers=1;
    window.module_targeting_ru_email=1;
    window.module_remove_old_ati=1;
    window.module_vas_logo=1;
    window.module_user_login_recaptcha=1;
    window.module_olx_delivery=1;
    window.module_safedeal_queues=1;
    window.module_register_recaptcha=1;
    window.module_register_recaptcha_mobile=1;
    window.module_safedeal_mobile_posting=1;
    window.module_S3FileStorage=1;
    window.module_avoid_payment_abandonment=1;
    window.module_disable_banned_ips=1;
    window.module_mweb_ad=1;
    window.module_mweb_listing=1;
    window.module_mweb_home=1;
    window.module_mweb_alternate_links=1;
    window.module_mweb_recaptcha=1;
    window.module_use_tokens_for_login=1;
    window.module_ua_discounts_promo=1;
    window.module_redis_split_db=1;
    window.module_datadog=1;
    window.module_safedeal_push=1;
    window.module_tariff_tester_prerequisite=1;
    window.module_tariff_tester=1;
    window.module_price_project_data_service=1;
    window.module_delivery_request_reserved=1;
    window.module_delivery_request_sent=1;
    window.module_delivery_request=1;
    window.module_delivery_request_popup=1;
    window.module_safedeal_transactions_tooltip=1;
    window.module_safedeal_async_history=1;
    window.module_nnl_category_migration=1;
    window.module_atlas_message_antispam=1;
    window.module_atlas_message_antispam_mute=1;
    window.module_dfp_refactor=1;
    window.module_register_confirm_token=1;
    window.module_ads_efficiency_mysql=1;
    window.module_rabbit_mq_db_proxy=1;
    window.module_new_dfp_segment=1;
    window.module_dfp_segment_mysql=1;
    window.module_control_engine=1;
    window.module_wallet_as_a_service=1;
    window.module_exchange_rate=1;
    window.module_messages_recaptcha=1;
    window.module_user_activity_tracker=1;
    window.isTestServer=0;
    window.sms_verified=1;
    window.user_sms_verified=1;
    window.mobileNumberPatternJs='^(?:(?:\\+?(380))|(0))?((?:39|50|66|95|99|63|93|67|68|96|97|98|91|92|94|73{1})[0-9]{5,7})$|^(?:\+?(?<code_ru>7))?(?<phone_ru>(?:900|901|902|903|904|905|906|908|909|910|911|912|913|914|915|916|917|918|919|920|921|922|923|924|925|926|927|928|929|930|931|932|933|934|936|937|938|939|941|950|951|952|953|955|956|958|960|961|962|963|964|965|966|967|968|969|970|971|977|978|980|981|982|983|984|985|986|987|988|989|991|992|993|994|995|996|997|999)[0-9]{7})$';
    window.region_id='';
    window.regionName="";
    window.subregion_id='';
    window.subregionName="";
    window.category_id='';
    window.is_job_cat=0;
    window.is_search_category='';
    window.categoryName="";
    window.categoryCode="";
    window.categoryAdsenseText="";
    window.root_category_id='';
    window.second_category_id='';
    window.second_category_code="";
    window.rootCategoryName="";
    window.rootCategoryCode="";
    window.rootCategoryAdsenseText="";
    window.setSeoPageName="OLX.ua";
    window.q="helllo";
    window.city_id='';
    window.regionCode='';
    window.cityCode='';
    window.is_archive='';
    window.geoData={"category":null,"locationName":null,"region":null,"params":{"search":{"private_business":"private"},"q":"helllo"}};
    window.geoAjaxGet='https://www.olx.ua/ajax/geo/get/';
    window.geoAjaxClose='https://www.olx.ua/ajax/geo/close/';
    window.isSearch='1';
    window.saveFavLink="about:blank";
    window.xtClickCategoryID='0';
    window.totalAds='0';
    window.isUserSearch='';
    window.liveinternet_id=null;
    window.categoriesStats=[];
    window.events_break=false;
    window.N=15;
    window.advertsAreEnabled=false;
    window.clearTargeting=function() { return true };
    window.destroySlots=function() { return true };
    window.initDfpSlots=function() { return true };
    window.displaySlots=function() { return true };
    window.gemius_hit=function(id) {};

    class observedNC {
        constructor() {
            this.searches = [];
            this.ads = [];
        }
    }
    window.observedNC = new observedNC();


    window.setInterval(function removeLockClickOverlay(e) {
        document.body.classList.remove("lockClickOverlay");
    }, 1000);
})();