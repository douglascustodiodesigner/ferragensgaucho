export { default as AboutOne } from '../../components/AboutOne.vue'
export { default as AboutThree } from '../../components/AboutThree.vue'
export { default as AboutTwo } from '../../components/AboutTwo.vue'
export { default as BlogDetailsWrapper } from '../../components/BlogDetailsWrapper.vue'
export { default as BlogPostItem } from '../../components/BlogPostItem.vue'
export { default as BlogPostWithSidebar } from '../../components/BlogPostWithSidebar.vue'
export { default as BlogPostWrapper } from '../../components/BlogPostWrapper.vue'
export { default as BlogSection } from '../../components/BlogSection.vue'
export { default as BrandLogoCarousel } from '../../components/BrandLogoCarousel.vue'
export { default as Breadcrumb } from '../../components/Breadcrumb.vue'
export { default as ContactForm } from '../../components/ContactForm.vue'
export { default as ContactWrapper } from '../../components/ContactWrapper.vue'
export { default as CounterUp } from '../../components/CounterUp.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as Header } from '../../components/Header.vue'
export { default as HeroSlider } from '../../components/HeroSlider.vue'
export { default as LoginRegisterWrapper } from '../../components/LoginRegisterWrapper.vue'
export { default as MobileNavigation } from '../../components/MobileNavigation.vue'
export { default as Navigation } from '../../components/Navigation.vue'
export { default as Newsletter } from '../../components/Newsletter.vue'
export { default as OffCanvasMobileMenu } from '../../components/OffCanvasMobileMenu.vue'
export { default as Pagination } from '../../components/Pagination.vue'
export { default as ProjectDetailsWrapper } from '../../components/ProjectDetailsWrapper.vue'
export { default as ProjectGallery } from '../../components/ProjectGallery.vue'
export { default as ProjectItem } from '../../components/ProjectItem.vue'
export { default as ProjectManagementBanner } from '../../components/ProjectManagementBanner.vue'
export { default as ProjectWrapper } from '../../components/ProjectWrapper.vue'
export { default as ScrollTop } from '../../components/ScrollTop.vue'
export { default as ServiceDetailsWrapper } from '../../components/ServiceDetailsWrapper.vue'
export { default as ServiceItem } from '../../components/ServiceItem.vue'
export { default as ServiceOne } from '../../components/ServiceOne.vue'
export { default as ServiceTwo } from '../../components/ServiceTwo.vue'
export { default as TeamMember } from '../../components/TeamMember.vue'
export { default as TeamMemberWrapper } from '../../components/TeamMemberWrapper.vue'
export { default as TeamSectionOne } from '../../components/TeamSectionOne.vue'
export { default as TestimonialSection } from '../../components/TestimonialSection.vue'
export { default as TopFeatures } from '../../components/TopFeatures.vue'
export { default as TopFeaturesTwo } from '../../components/TopFeaturesTwo.vue'
export { default as WidgetArchive } from '../../components/WidgetArchive.vue'
export { default as WidgetCategories } from '../../components/WidgetCategories.vue'
export { default as WidgetPopularPost } from '../../components/WidgetPopularPost.vue'
export { default as WidgetSearch } from '../../components/WidgetSearch.vue'
export { default as WidgetTags } from '../../components/WidgetTags.vue'
export { default as WorkingProcess } from '../../components/WorkingProcess.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
