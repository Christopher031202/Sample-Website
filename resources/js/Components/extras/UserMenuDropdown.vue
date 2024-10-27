<script setup>
import { Link } from '@inertiajs/vue3';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';
import ResponsiveNavLink from '../ResponsiveNavLink.vue';
import UserIcon from '@/Icons/UserIcon.vue';
import UserEditIcon from '@/Icons/UserEditIcon.vue';
import LogoutIcon from '@/Icons/LogoutIcon.vue';
import ListIcon from '@/Icons/ListIcon.vue';

// Function to get the initial of the first name
function getInitial(name) {
  const firstName = name.split(' ')[0]; // Get the first word (presumably the first name)
  return firstName.charAt(0).toUpperCase(); // Return the first character of the first name in uppercase
}
</script>

<template>
  <div v-if="$page.props.auth.user" class="font-mont">
    <Menu as="div" class="inline-block text-left">
      <MenuButton class="flex items-center space-x-2">
        <!-- Mobile View: Show icon and name -->
        <UserIcon class="fill-primary w-6 h-6 lg:hidden" />
        <span class="text-primary text-sm lg:hidden flex-1 min-w-0">
          {{ $page.props.auth.user.name }}
        </span>

        <!-- Desktop View: Show only initial inside a circle -->
        <span
          class="hidden lg:block py-2 px-[14px] rounded-full justify-center lg:text-center lg:font-semibold text-sm transition duration-150 ease-in-out hover:bg-gray-500 lg:bg-primary text-customWhite">
          {{ getInitial($page.props.auth.user.name) }}
        </span>
      </MenuButton>

      <transition enter-active-class="transition duration-100 ease-out" enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100" leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
        <MenuItems
          class="absolute z-10 mt-3 bg-white rounded-md shadow-lg items-center ring-1 ring-black ring-opacity-5 focus:outline-none lg:right-0 lg:mt-3 lg:origin-top-right flex justify-start">
          <div class="px-1 py-1 flex flex-col items-center">
            <MenuItem>
            <ResponsiveNavLink :href="route('profile.edit')"
              class="text-primary block px-4 py-2 text-sm font-normal text-center">
              <UserEditIcon class="inline-flex mr-3 w-4 h-4" />Profile
            </ResponsiveNavLink>
            </MenuItem>

            <MenuItem>
            <ResponsiveNavLink href="#"
              class="text-primary block px-4 py-2 text-sm font-normal text-center">
              <ListIcon class="inline-flex mr-3 w-4 h-4" />Appointments
            </ResponsiveNavLink>
            </MenuItem>

            <MenuItem>
            <ResponsiveNavLink :href="route('logout')" method="post" as="button"
              class="text-primary block px-4 py-2 text-sm font-normal text-center">
              <LogoutIcon class="inline-flex mr-3 w-4 h-4" />Log Out
            </ResponsiveNavLink>
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </div>

  <!-- Display Login and Register buttons if the user is not logged in -->
  <div v-else class="flex justify-center items-center">
    <Link :href="route('login')" class="whitespace-nowrap text-sm font-bold text-primary hover:text-gray-600 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out">Log In</Link>
  </div>
</template>