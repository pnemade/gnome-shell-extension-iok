// Inscript2 Onscreen Keyboard Gnome Shell extension
// Copyright (C) 2012 Parag Nemade

/* This program is free software: you can redistribute it and/or modify
   it under the terms of the GNU General Public License as published by
   the Free Software Foundation, either version 2 of the License, or
   (at your option) any later version.

   This program is distributed in the hope that it will be useful,
   but WITHOUT ANY WARRANTY; without even the implied warranty of
   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
   GNU General Public License for more details.

   You should have received a copy of the GNU General Public License
   along with this program.  If not, see <http://www.gnu.org/licenses/>. */

const St = imports.gi.St;
const Main = imports.ui.main;
const GLib = imports.gi.GLib;

let button;

function _showIOK() {
GLib.spawn_command_line_async('iok');
}

function init() {
    button = new St.Bin({ style_class: 'panel-button',
                          reactive: true,
                          can_focus: true,
                          x_fill: true,
                          y_fill: false,
                          track_hover: true });

    let icon = new St.Icon({ icon_name: 'iok',
                             icon_type: St.IconType.FULLCOLOR,
                             icon_size: 22 });

    button.set_child(icon);
    button.connect('button-press-event',  _showIOK);
}

function enable() {
    Main.panel._rightBox.insert_child_at_index(button, 0);
}

function disable() {
    Main.panel._rightBox.remove_child(button);
}
