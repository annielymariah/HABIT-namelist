terraform {
  required_providers {
    digitalocean = {
      source  = "digitalocean/digitalocean"
      version = "~> 2.0"
    }
  }
}

provider "digitalocean" {
  token = var.do_token
}

variable "do_token" {
  description = "DigitalOcean API Token"
  type        = string
}

variable "ssh_fingerprint" {
  description = "SSH key fingerprint"
  type        = string
}

resource "digitalocean_droplet" "habit_app" {
  name       = "habit-namelist"
  region     = "nyc3"
  size       = "s-1vcpu-1gb"
  image      = "docker-20-04"
  ssh_keys   = [var.ssh_fingerprint]
  tags       = ["habit", "namelist"]
}